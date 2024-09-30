import { createContext } from "react";
import { RawColors } from "../types/colors";

export interface ThemeContextValue {
  colors?: RawColors;
}

const defaultThemeContextValue: ThemeContextValue = {
  colors: undefined,
};

export const ThemeContext = createContext(defaultThemeContextValue);
