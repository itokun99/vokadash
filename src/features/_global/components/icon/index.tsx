import React from "react";
import * as icons from "lucide-react";
import * as radixIcons from "@radix-ui/react-icons";

type IconNames = keyof typeof icons & keyof typeof radixIcons;

export interface IconProps {
  iconName?: IconNames;
  className?: string;
  lucideIcon?: keyof typeof icons;
  radixIcon?: keyof typeof radixIcons;
}

export const Icon = React.memo((props: IconProps) => {
  const isEmpty = !props.iconName && !props.lucideIcon && !props.radixIcon;
  let Component = null;

  if (!isEmpty) return null;

  Component =
    (props.iconName && (icons[props.iconName] || radixIcons[props.iconName])) ||
    (((props.lucideIcon && icons[props.lucideIcon]) ||
      (props.radixIcon && radixIcons[props.radixIcon])) as JSX.ElementType);
  return Component ? <Component {...props} /> : null;
});
