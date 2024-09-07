import React from "react";
import * as icons from "lucide-react";

export interface IconProps {
  iconName: keyof typeof icons;
}

export const Icon = React.memo((props: IconProps) => {
  if (!props.iconName || !icons[props.iconName]) return null;
  const Component = icons[props.iconName] as unknown as JSX.ElementType;
  if (!Component) return null;
  return <Component {...props} />;
});
