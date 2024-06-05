import User from "@/models/User";

export interface AuthContextProps {
  user?: User;
  handleGoogleLogin: () => Promise<void>
}