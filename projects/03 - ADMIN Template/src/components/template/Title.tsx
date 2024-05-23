import { TitleProps } from "../../types/TitleProps";

export default function Title(props: TitleProps) {
  return (
    <div>
      <h1 className={`font-black text-3xl text-gray-900 dark:text-gray-200`}>
        {props.title}
      </h1>
      <h2 className={`font-normal text-sm text-gray-600 dark:text-gray-300`}>
        {props.subtitle}
      </h2>
    </div>
  );
}
