import { ThemeTogglerProps } from "@/types/ThemeTogglerProps";
import { MoonIcon, SunIcon } from "../icons";

export default function ThemeToggler(props: ThemeTogglerProps) {
  return props.theme === "dark" ? (
    <div
      onClick={props.handleToggleTheme}
      className="flex items-center px-2 w-20 h-10 bg-gradient-to-r from-yellow-300 to-orange-700  rounded-full ease duration-300 cursor-pointer dark:text-black"
    >
      <div>{SunIcon}</div>
    </div>
  ) : (
    <div className="flex items-center justify-end px-2 w-20 h-10 text-white bg-gradient-to-r from-zinc-500 to-zinc-700  rounded-full ease duration-300 cursor-pointer">
      <div>{MoonIcon}</div>
    </div>
  );
}
