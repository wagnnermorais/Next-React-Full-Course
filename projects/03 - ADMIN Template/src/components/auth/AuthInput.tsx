import { AuthInputProps } from "@/types/AuthInputProps";

export default function AuthInput(props: AuthInputProps) {
  return props.render ? null : (
    <div className="flex flex-col relative">
      <input
        type={props.type ?? "text"}
        value={props.value}
        onChange={(e) => props.valueChanged?.(e.target.value)}
        className="block px-2.5 pb-2.5 pt-4 w-full text-lg appearance-none bg-transparent border rounded-lg focus:outline-none focus:ring-0 text-white border-gray-300 focus:border-purple-500 dark:text-white dark:border-gray-600 dark:focus:border-purple-500 peer"
        placeholder=" "
      />
      <label className="absolute px-2 text-lg transform -translate-y-4 scale-75 top-0.5 z-10 start-1 origin-[0] duration-300   text-gray-500 bg-zinc-900 peer-focus:px-2 dark:text-gray-400 dark:bg-zinc-900 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
        {props.label}
      </label>
    </div>
  );
}
