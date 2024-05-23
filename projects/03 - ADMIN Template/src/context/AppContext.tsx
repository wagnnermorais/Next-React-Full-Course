import { useState, createContext } from "react";
import { AppContextProps } from "@/types/AppContextProps";
import { ThemeType } from "@/types/ThemeType";

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
  const [theme, setTheme] = useState<ThemeType>("dark");

  const handleToggleTheme = () => {
    setTheme(theme === "" ? "dark" : "");
  };

  return (
    <AppContext.Provider value={{ theme, handleToggleTheme }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
