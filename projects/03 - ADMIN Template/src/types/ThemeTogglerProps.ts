import { ThemeType } from "./ThemeType";

export interface ThemeTogglerProps {
  theme?: ThemeType;
  handleToggleTheme?: () => void;
}