import { ButtonProps } from "../types/ButtonProps";

export default function Button({ children }: ButtonProps) {
  return (
    <div className="flex justify-center items-center my-8">
      <button
        className={`px-6 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white text-lg font-bold rounded-md`}
      >
        {children}
      </button>
    </div>
  );
}
