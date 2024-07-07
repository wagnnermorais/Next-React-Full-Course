import { InputProps } from "../types/InputProps";

export default function Input({
  text,
  type,
  value,
  readonly,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="my-2">{text}</label>
      <input
        type={type ?? "text"}
        value={value}
        readOnly={readonly}
        className={`px-4 py-2 border border-purple-500 rounded-lg outline-none bg-gray-100 ${
          readonly ? "" : "focus:bg-white"
        } ease duration-300`}
        onChange={(e) => onChange?.(e.target.value)}
        max={99}
        min={0}
      />
    </div>
  );
}
