import { ThemeType } from "@/types/ThemeType";

export interface AppContextProps {
  theme?: ThemeType;
  handleToggleTheme?: () => void;
}