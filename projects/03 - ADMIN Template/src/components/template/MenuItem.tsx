import { MenuItemProps } from "@/types/MenuItemProps";

export default function MenuItem(props: MenuItemProps) {
  return (
    <div>
      <li className="">
        {props.icon} {props.text}
      </li>
    </div>
  );
}
