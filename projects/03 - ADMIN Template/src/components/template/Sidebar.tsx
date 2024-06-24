import useAuth from "@/hooks/useAuth";
import {
  BellIcon,
  HomeIcon,
  LogoutIcon,
  ProfileIcon,
  SettingsIcon,
} from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function Sidebar() {
  const { handleLogout } = useAuth();
  return (
    <aside className="flex flex-col dark:bg-zinc-900 dark:text-blue-300">
      <div className="flex flex-col items-center justify-center w-full h-20 bg-gradient-to-r from-indigo-800 to-purple-500 dark:bg-gradient-to-r dark:from-zinc-800 dark:to-zinc-500-500 dark:border-b-2 dark:border-gray-700">
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" text="Home" icon={HomeIcon} />
        <MenuItem url="/settings" text="Settings" icon={SettingsIcon} />
        <MenuItem url="/notifications" text="Notifications" icon={BellIcon} />
        <MenuItem url="/profile" text="Profile" icon={ProfileIcon} />
      </ul>
      <ul className="py-4">
        <MenuItem
          text="Logout"
          icon={LogoutIcon}
          className={`
          text-red-600
          hover:bg-red-400
          hover:text-white
          dark:text-white
          dark:hover:bg-zinc-800
          dark:hover:text-gray-200
        `}
          onClick={handleLogout}
        />
      </ul>
    </aside>
  );
}
