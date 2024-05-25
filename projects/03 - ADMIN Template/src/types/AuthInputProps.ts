export interface AuthInputProps {
  label: string;
  value: any;
  type?: "text" | "email" | "password";
  required: boolean;
  render?: boolean;
  valueChanged: (newValue: any) => void;
}