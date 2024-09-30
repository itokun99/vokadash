import { RawColors } from "../types/colors";
import { rgba } from "../utils";
import { useTheme } from "./theme";

export const useColors = () => {
  const theme = useTheme();
  const palette = theme.colors as RawColors;

  // Warna dengan alpha (RGBA)
  const colorRgba = {
    primary: (alpha: number = 1) => rgba(palette, "primary", alpha),
    secondary: (alpha: number = 1) => rgba(palette, "secondary", alpha),
    secondary2: (alpha: number = 1) => rgba(palette, "secondary2", alpha),
    secondary3: (alpha: number = 1) => rgba(palette, "secondary3", alpha),
    warning: (alpha: number = 1) => rgba(palette, "warning", alpha),
    danger: (alpha: number = 1) => rgba(palette, "danger", alpha),
    success: (alpha: number = 1) => rgba(palette, "success", alpha),
    info: (alpha: number = 1) => rgba(palette, "info", alpha),
    white: (alpha: number = 1) => rgba(palette, "white", alpha),
    black: (alpha: number = 1) => rgba(palette, "black", alpha),
    gray: (alpha: number = 1) => rgba(palette, "gray", alpha),
    dark: (alpha: number = 1) => rgba(palette, "dark", alpha),
    light: (alpha: number = 1) => rgba(palette, "light", alpha),
    border: (alpha: number = 1) => rgba(palette, "border", alpha),
    transparent: "transparent",
  };

  const colorVars = {
    white: "var(--theme-color-white)",
    black: "var(--theme-color-black)",
    primary: "var(--theme-color-primary)",
    secondary: "var(--theme-color-secondary)",
    secondary2: "var(--theme-color-secondary2)",
    secondary3: "var(--theme-color-secondary3)",
    danger: "var(--theme-color-danger)",
    success: "var(--theme-color-success)",
    info: "var(--theme-color-info)",
    warning: "var(--theme-color-warning)",
    gray: "var(--theme-color-gray)",
    border: "var(--theme-color-border)",
    light: "var(--theme-color-light)",
    dark: "var(--theme-color-dark)",
    transparent: "transparent",
  };

  return {
    colorRgba,
    colorVars,
  };
};
