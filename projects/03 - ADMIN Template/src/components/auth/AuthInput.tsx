import { AuthInputProps } from "@/types/AuthInputProps";

export default function AuthInput(props: AuthInputProps) {
  return props.render ? null : (
    <div className="flex flex-col">
      <label>{props.label}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        onChange={(e) => props.valueChanged?.(e.target.value)}
        className="py-2 px-4 text-base border border-zinc-400 rounded-sm ease duration-300 outline-none focus:border-blue-500 hover:bg-gray-100"
      />
    </div>
  );
}
