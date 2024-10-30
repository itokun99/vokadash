import React, { useRef, useState } from "react";
import { cn, Input, InputProps } from "../../libs";
import { Eye, EyeOff } from "lucide-react";

export interface InputSecureProps extends InputProps {
  containerStyle?: React.CSSProperties;
  containerClassName?: string;
}

export const InputSecure = React.forwardRef<HTMLInputElement, InputSecureProps>(
  ({ containerStyle, containerClassName, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [visible, setVisible] = useState(false);

    const handleClickVisible = () => {
      setVisible((v) => !v);
      inputRef.current?.focus();
      const currentValue = inputRef.current?.value;
      setTimeout(() => {
        if (currentValue) {
          inputRef.current?.setSelectionRange(
            currentValue?.length,
            currentValue?.length,
          );
        }
      }, 50);
    };

    return (
      <div
        className={cn("relative", containerClassName)}
        style={containerStyle}
      >
        <Input
          ref={inputRef || ref}
          type={visible ? "text" : "password"}
          className="pr-12"
          {...props}
        />
        <button
          type="button"
          role="button"
          className={cn(
            "bg-none outline-none absolute top-0 right-0 mt-2 mr-4",
          )}
          onClick={handleClickVisible}
        >
          {visible ? <Eye /> : <EyeOff />}
        </button>
      </div>
    );
  },
);
