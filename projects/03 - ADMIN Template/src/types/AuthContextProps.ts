import User from "@/models/User";

export interface AuthContextProps {
  user?: User | null;
  handleGoogleLogin: () => Promise<void>
  handleLogout: () => Promise<void>
}