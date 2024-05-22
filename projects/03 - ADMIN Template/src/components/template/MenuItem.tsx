import Link from "next/link";
import { MenuItemProps } from "@/types/MenuItemProps";

export default function MenuItem(props: MenuItemProps) {
  return (
    <div>
      <li className="hover:bg-gray-200" onClick={props.onClick}>
        {props.url ? (
          <Link href={props.url}>
            <p
              className={`flex flex-col justify-center items-center w-full h-20 text-gray-600 ${props.className}`}
            >
              {props.icon}{" "}
              <span className="text-sm font-light">{props.text}</span>
            </p>
          </Link>
        ) : (
          <p
            className={`flex flex-col justify-center items-center w-full h-20 cursor-pointer ${props.className}`}
          >
            {props.icon}
            <span className="text-sm font-light text-gray-600">
              {props.text}
            </span>
          </p>
        )}
      </li>
    </div>
  );
}
