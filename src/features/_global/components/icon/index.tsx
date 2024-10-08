import React from "react";
import * as icons from "lucide-react";
import * as radixIcons from "@radix-ui/react-icons";

type IconNames = keyof typeof icons;

export interface IconProps {
  iconName?: IconNames;
  className?: string;
  lucideIcon?: keyof typeof icons;
  radixIcon?: keyof typeof radixIcons;
}

export const Icon = React.memo((props: IconProps) => {
  const isEmpty = !props.iconName && !props.lucideIcon && !props.radixIcon;
  let Component = null;

  if (isEmpty) return null;

  if (props.iconName && icons[props.iconName]) {
    Component = icons[props.iconName] as JSX.ElementType;
  } else if (props.lucideIcon && icons[props.lucideIcon]) {
    Component = icons[props.lucideIcon] as JSX.ElementType;
  } else if (props.radixIcon && radixIcons[props.radixIcon]) {
    Component = radixIcons[props.radixIcon] as JSX.ElementType;
  }

  return Component ? <Component {...props} /> : null;
});
