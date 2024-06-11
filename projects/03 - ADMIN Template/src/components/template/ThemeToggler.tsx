import { ThemeTogglerProps } from "@/types/ThemeTogglerProps";
import { MoonIcon, SunIcon } from "../icons";

export default function ThemeToggler(props: ThemeTogglerProps) {
  return (
    <div
      onClick={props.handleToggleTheme}
      className={`flex items-center px-2 w-20 h-10 rounded-full ease duration-300 cursor-pointer ${
        props.theme === "dark"
          ? "bg-gradient-to-r from-yellow-300 to-orange-700 dark:text-black"
          : "justify-end text-white bg-gradient-to-r from-zinc-500 to-zinc-700"
      }`}
    >
      <div>{props.theme === "dark" ? SunIcon : MoonIcon}</div>
    </div>
  );
}
