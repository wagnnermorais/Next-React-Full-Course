import { useState } from "react";
import AuthInput from "@/components/auth/AuthInput";

export default function Auth() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Autenticação</h1>
      <AuthInput
        type="email"
        label="E-mail"
        value={email}
        valueChanged={setEmail}
        required
      />
      <AuthInput
        type="password"
        label="Password"
        value={password}
        valueChanged={setPassword}
        required
      />
    </div>
  );
}
