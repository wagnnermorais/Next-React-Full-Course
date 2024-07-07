import { InputHTMLAttributes } from "react";

export interface InputProps {
  text: string;
  type?: "text" | "number";
  value: string | number;
  readonly?: boolean
  onChange?: (value: any) => void;
}