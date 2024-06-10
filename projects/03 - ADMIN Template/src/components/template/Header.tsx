import Title from "./Title";
import ThemeToggler from "./ThemeToggler";
import useAppData from "@/hooks/useAppData";
import { HeaderProps } from "../../types/HeaderProps";
import UserAvatar from "./UserAvatar";

export default function Header(props: HeaderProps) {
  const { theme, handleToggleTheme } = useAppData();
  return (
    <header className="flex">
      <Title title={props.title} subtitle={props.subtitle} />
      <div className="flex items-center flex-grow justify-end gap-4">
        <ThemeToggler theme={theme} handleToggleTheme={handleToggleTheme} />
        <UserAvatar />
      </div>
    </header>
  );
}
