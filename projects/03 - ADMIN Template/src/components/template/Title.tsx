import { TitleProps } from "../../types/TitleProps";

export default function Title(props: TitleProps) {
  return (
    <div>
      <h1 className={`font-black text-3xl text-gray-900`}>{props.title}</h1>
      <h2 className={`font-light text-sm text-gray-600`}>{props.subtitle}</h2>
    </div>
  );
}
