import { createContext, useState } from "react";
import { AuthContextProps } from "@/types/AuthContextProps";
import route from "next/router";
import firebase from "../firebase/config";
import User from "@/models/User";

const AuthContext = createContext<AuthContextProps>({});

async function normalizedUser(firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken();
  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    emai: firebaseUser.email,
    token: token,
    provider: firebaseUser.providerData[0]?.providerId,
    image: firebaseUser.photoURL,
  };
}

export function AuthProvider(props: any) {
  const [user, setUser] = useState<User>();

  async function handleGoogleLogin() {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

    if (response.user?.email) {
      const user = await normalizedUser(response.user);
      setUser(user);
      route.push("/");
    }
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        handleGoogleLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
