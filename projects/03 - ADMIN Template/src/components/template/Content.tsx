import { ContentProps } from "@/types/ContentProps";

export default function Content(props: ContentProps) {
  return <div className={`flex flex-col my-7`}>{props.children}</div>;
}
