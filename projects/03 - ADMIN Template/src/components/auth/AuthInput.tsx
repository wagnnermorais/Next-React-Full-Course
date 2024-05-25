import { AuthInputProps } from "@/types/AuthInputProps";

export default function AuthInput(props: AuthInputProps) {
  return props.render ? null : (
    <div className="flex flex-col">
      <label>{props.label}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        onChange={(e) => props.valueChanged?.(e.target.value)}
      />
    </div>
  );
}
