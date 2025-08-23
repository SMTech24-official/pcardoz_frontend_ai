"use client";

import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { IInput } from "@/types";
import { Input } from "@heroui/react";

interface IProps extends IInput {}

export default function PInput({
  label,
  name,
  className,
  required = false,
  type = "text",
  ...rest
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-foreground">
          {label} {required && <span className="text-destructive">*</span>}
        </label>
      )}
      <Input
        id={name}
        type={type}
        className={cn(className)}
        {...register(name)}
        {...rest}
        aria-invalid={!!error}
      />
      {error && <span className="text-sm text-destructive">{error}</span>}
    </div>
  );
}
