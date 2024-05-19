import { HeaderProps } from "../../types/HeaderProps";
import Title from "./Title";

export default function Header(props: HeaderProps) {
  return (
    <header>
      <Title title={props.title} subtitle={props.subtitle} />
    </header>
  );
}
