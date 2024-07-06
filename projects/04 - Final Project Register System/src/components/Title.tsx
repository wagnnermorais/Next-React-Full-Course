export default function Title(props) {
  return (
    <div className="flex flex-col justify-center py-2">
      <h1 className="px-5">{props.children}</h1>
      <hr className="border-2 border-purple-500" />
    </div>
  );
}
