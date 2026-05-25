import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-wind-black px-4 text-sm font-semibold text-white shadow-lift transition active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}
