import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import { LayoutProps } from "../../types/LayoutProps";

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex w-full min-h-screen dark">
      <Sidebar />
      <div className="flex flex-col w-full p-4 bg-zinc-300 dark:bg-zinc-900 dark:text-white">
        <Header title={props.title} subtitle={props.subtitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
}
