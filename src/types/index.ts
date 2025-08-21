export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  labelPlacement?: "outside" | "outside-left" | "inside";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  disabled?: boolean;
  className?: string;
};