import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/features/_global/libs/shadcn/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-theme-color-primary text-primary-foreground hover:bg-theme-color-primary/90",
        destructive:
          "bg-theme-color-danger text-destructive-foreground hover:bg-theme-color-danger/90",
        danger:
          "bg-theme-color-danger text-destructive-foreground hover:bg-theme-color-danger/90",
        outline:
          "border border-theme-color-primary bg-transparent text-theme-color-primary hover:bg-theme-color-primary hover:text-theme-color-white",
        "outline-secondary":
          "border border-theme-color-secondary bg-transparent text-theme-color-secondary hover:bg-theme-color-secondary hover:text-theme-color-white",
        "outline-secondary2":
          "border border-theme-color-secondary2 bg-transparent text-theme-color-secondary2 hover:bg-theme-color-secondary2 hover:text-theme-color-white",
        "outline-secondary3":
          "border border-theme-color-secondary3 bg-transparent text-theme-color-secondary3 hover:bg-theme-color-secondary3 hover:text-theme-color-white",
        "outline-warning":
          "border border-theme-color-warning bg-transparent text-theme-color-warning hover:bg-theme-color-warning hover:text-theme-color-white",
        "outline-danger":
          "border border-theme-color-danger bg-transparent text-theme-color-danger hover:bg-theme-color-danger hover:text-theme-color-white",
        "outline-dark":
          "border border-theme-color-dark bg-transparent text-theme-color-dark hover:bg-theme-color-dark hover:text-theme-color-white",
        secondary2:
          "bg-theme-color-secondary2 text-theme-color-dark hover:bg-theme-color-secondary2/80",
        secondary3:
          "bg-theme-color-secondary3 text-theme-color-dark hover:bg-theme-color-secondary3/80",
        secondary:
          "bg-theme-color-secondary text-theme-color-dark hover:bg-theme-color-secondary/80",
        warning:
          "bg-theme-color-warning text-theme-color-white hover:bg-theme-color-warning/80",
        dark: "bg-theme-color-dark text-theme-color-white hover:bg-theme-color-dark/80",
        info: "bg-theme-color-info text-theme-color-dark hover:bg-theme-color-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",

        link: "text-theme-color-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
