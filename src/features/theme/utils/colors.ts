import { RawColors } from "../types/colors";

// convert to rgba // default palettes
export const RAW_COLORS: RawColors = {
  white: "#ffffff",
  black: "#000000",
  primary: "#2D7263",
  secondary: "#54cab2",
  secondary2: "#b3f8d0",
  secondary3: "#EEF4F3",
  danger: "#FF396F",
  success: "#2D7263",
  info: "#a8cbc4",
  warning: "#FFB400",
  gray: "#e0e0e0",
  border: "#e0e0e0",
  light: "#ffffff",
  dark: "#222222",
};

export const rgba = (
  palette: RawColors,
  name: keyof typeof RAW_COLORS,
  alpha = 1,
) => {
  const hexColor = palette[name];
  if (!hexColor) return "";

  const color = convertToRgbArray(hexColor as string);
  return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
};

// Helper function to convert HEX to RGBA
export const convertToRgbArray = (hex: string) => {
  // Remove the hash symbol if present
  const cleanHex = hex.replace("#", "");

  // Convert 3-digit hex to 6-digit hex
  const fullHex =
    cleanHex.length === 3
      ? cleanHex
          .split("")
          .map((char) => char + char)
          .join("")
      : cleanHex;

  // Extract the red, green, and blue components
  const r = parseInt(fullHex.substring(0, 2), 16);
  const g = parseInt(fullHex.substring(2, 4), 16);
  const b = parseInt(fullHex.substring(4, 6), 16);

  // Return the rgba string
  // return `rgb(${r}, ${g}, ${b}, ${alpha})`;
  return [r, g, b];
};
