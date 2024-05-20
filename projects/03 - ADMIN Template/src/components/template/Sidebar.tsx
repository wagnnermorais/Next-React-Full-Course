import { BellIcon, HomeIcon, LogoutIcon, SettingsIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function Sidebar() {
  return (
    <aside className="flex flex-col">
      <div className="flex flex-col items-center justify-center w-full h-20 bg-gradient-to-r from-indigo-500 to-purple-800">
        <Logo />
      </div>
      <ul className="flex-grow px-2">
        <MenuItem url="/" text="Home" icon={HomeIcon} />
        <MenuItem url="/settings" text="Settings" icon={SettingsIcon} />
        <MenuItem url="/notifications" text="Notifications" icon={BellIcon} />
      </ul>
      <ul className="py-4 px-2">
        <MenuItem url="/" text="Logout" icon={LogoutIcon} />
      </ul>
    </aside>
  );
}
