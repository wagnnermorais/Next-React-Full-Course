import { LayoutProps } from "../types/LayoutProps";
import Title from "./Title";

export default function Layout({ title, children }: LayoutProps) {
  return (
    <div className="flex flex-col w-2/3 bg-white text-gray-800 rounded-sm shadow-md">
      <Title>{title}</Title>
      <div className="p-4">{children}</div>
    </div>
  );
}
