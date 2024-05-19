import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import { LayoutProps } from "../../types/LayoutProps";

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <Sidebar />
      <Header title={props.title} subtitle={props.subtitle} />
      <Content>{props.children}</Content>
    </div>
  );
}
