import { useState } from "react";
import AuthInput from "@/components/auth/AuthInput";

export default function Auth() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (mode === "login") {
      return console.log("Login");
    }

    return console.log("register");
  };

  return (
    <div className="flex items-center min-h-screen bg-zinc-900">
      <div className="w-1/2 hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="https://images.unsplash.com/photo-1612585763928-e64fdc2a3d38?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Auth image"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-2/3">
        <h1 className="my-4 text-xl font-bold text-white">
          {mode === "login"
            ? "Sign in with your account!"
            : "Sign up to our platform"}
        </h1>
        <div className="bg-white my-4 mx-auto pb-4 px-4 w-1/2">
          <div className="my-8">
            <AuthInput
              type="email"
              label="E-mail"
              value={email}
              valueChanged={setEmail}
              required
            />
          </div>
          <div className="my-4">
            <AuthInput
              type="password"
              label="Password"
              value={password}
              valueChanged={setPassword}
              required
            />
          </div>
        </div>
        <button
          className="my-4 py-2 px-4 w-1/2 font-bold border border-gray-400 rounded-sm text-white ease duration-300 hover:opacity-80"
          onClick={handleSubmit}
        >
          {mode === "login" ? "Sign in" : "Register"}
        </button>
        <hr className="my-2 border-gray-300 w-1/2" />
        <button
          className="my-4 py-2 px-4 w-1/2 font-bold  bg-red-500 border border-gray-400 rounded-sm text-white relative ease duration-300 hover:opacity-80"
          onClick={handleSubmit}
        >
          {mode === "login" ? "Sign in with Google" : "Register"}
        </button>
      </div>
    </div>
  );
}
