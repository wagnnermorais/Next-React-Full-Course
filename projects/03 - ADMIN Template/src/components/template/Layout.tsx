import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import useAppData from "@/hooks/useAppData";
import { LayoutProps } from "../../types/LayoutProps";
import ForceAuth from "../auth/ForceAuth";

export default function Layout(props: LayoutProps) {
  const { theme, handleToggleTheme } = useAppData();
  return (
    <ForceAuth>
      <div className={`${theme} flex w-full min-h-screen`}>
        <Sidebar />
        <div className="flex flex-col w-full p-4 bg-zinc-300 dark:bg-zinc-800 dark:text-white">
          <Header title={props.title} subtitle={props.subtitle} />
          <Content>{props.children}</Content>
        </div>
      </div>
    </ForceAuth>
  );
}
