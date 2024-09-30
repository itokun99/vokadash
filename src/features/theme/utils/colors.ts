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

export function hexToHSL(hex: string): string {
  // Remove the hash symbol if present
  hex = hex.replace(/^#/, "");

  // Convert 3-digit hex to 6-digit
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((hexChar) => hexChar + hexChar)
      .join("");
  }

  // Parse the hex values for red, green, and blue
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // Find the minimum and maximum values among the RGB values
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  // Calculate luminance
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (delta !== 0) {
    // Calculate saturation
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    // Calculate hue
    switch (max) {
      case r:
        h = (g - b) / delta + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / delta + 2;
        break;
      case b:
        h = (r - g) / delta + 4;
        break;
    }
    h /= 6;
  }

  // Convert hue to degrees, saturation, and luminance to percentages
  const hDegrees = Math.round(h * 360);
  const sPercent = Math.round(s * 100);
  const lPercent = Math.round(l * 100);

  // Return the HSL string in the format suitable for CSS
  return `${hDegrees} ${sPercent}% ${lPercent}%`;
}
