import Title from "./Title";
import ThemeToggler from "./ThemeToggler";
import useAppData from "@/hooks/useAppData";
import { HeaderProps } from "../../types/HeaderProps";

export default function Header(props: HeaderProps) {
  const { theme, handleToggleTheme } = useAppData();
  return (
    <header className="flex">
      <Title title={props.title} subtitle={props.subtitle} />
      <div className="flex flex-grow justify-end">
        <ThemeToggler theme={theme} handleToggleTheme={handleToggleTheme} />
      </div>
    </header>
  );
}
