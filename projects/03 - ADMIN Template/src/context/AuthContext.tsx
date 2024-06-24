import { createContext, useEffect, useState } from "react";
import { AuthContextProps } from "@/types/AuthContextProps";
import route from "next/router";
import firebase from "../firebase/config";
import Cookies from "js-cookie";
import User from "@/models/User";

const AuthContext = createContext<AuthContextProps>({
  user: null,
  handleGoogleLogin: async () => {},
  handleLogout: async () => {},
});

async function normalizedUser(firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken();
  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName || "",
    email: firebaseUser.email || "",
    token: token,
    provider: firebaseUser.providerData[0]?.providerId || "",
    image: firebaseUser.photoURL || "",
  };
}

const manageCookie = (isLogged: boolean) => {
  if (isLogged) {
    return Cookies.set("admin-template-cod3r-auth", "true", {
      expires: 7,
    });
  }
  return Cookies.remove("admin-template-cod3r-auth");
};

export function AuthProvider(props: any) {
  const [user, setUser] = useState<User | null>(null);
  const [loader, setLoader] = useState<boolean>(true);

  async function configureSession(firebaseUser: firebase.User | null) {
    if (firebaseUser?.email) {
      const user = await normalizedUser(firebaseUser);
      setUser(user);
      manageCookie(true);
      setLoader(false);
      return user.email;
    } else {
      setUser(null);
      manageCookie(false);
      setLoader(true);
      return false;
    }
  }

  async function handleGoogleLogin() {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

    if (response.user) {
      await configureSession(response.user);
      route.push("/");
    }
  }

  async function handleLogout() {
    try {
      setLoader(true);
      await firebase.auth().signOut();
      await configureSession(null);
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    if (Cookies.get("admin-template-cod3r-auth")) {
      const cancel = firebase.auth().onIdTokenChanged(configureSession);
      return () => cancel();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        handleGoogleLogin,
        handleLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
