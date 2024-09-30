import React, {
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ThemeContextValue, ThemeContext } from "../contexts";
import { hexToHSL, RAW_COLORS } from "../utils";
import { jsonHelper } from "@/features/_global";
import { RawColors } from "../types";

export interface ThemeProviderProps extends PropsWithChildren {
  colors: ThemeContextValue["colors"];
}

// Fungsi untuk meng-generate root CSS variables
const generateCssVariables = (colors: ThemeContextValue["colors"]) => {
  const root = document.documentElement;

  if (colors) {
    // Iterasi warna dan set sebagai CSS variable di root
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--theme-color-${key}`, value);
    });
  }
};

const mapHslColor = (colors: RawColors) => {
  const hslObj: RawColors = {};
  Object.keys(colors)?.forEach((key) => {
    if (colors[key as keyof typeof colors]) {
      hslObj[key as keyof typeof hslObj] = hexToHSL(
        colors[key as keyof typeof colors] as string,
      );
    }
  });
  return hslObj;
};

export const ThemeProvider = React.memo((props: ThemeProviderProps) => {
  const [colors, setColors] = useState(mapHslColor(props.colors || RAW_COLORS));
  const colorRef = useRef(colors);
  colorRef.current = colors;
  const colorJson = useMemo(() => JSON.stringify(props.colors), [props.colors]);

  const _colorJson = useMemo(() => JSON.stringify(colors), [colors]);

  useEffect(() => {
    if (colorJson && colorJson !== _colorJson) {
      const _colors = jsonHelper.parse(colorJson);

      if (_colors) {
        setColors((prev) => ({ ...prev, ...mapHslColor(_colors) }));
      }
    }
  }, [_colorJson, colorJson]);

  // Set root CSS variables setiap kali `colors` berubah
  useEffect(() => {
    if (_colorJson && colorRef.current) {
      generateCssVariables(colorRef.current);
    }
  }, [_colorJson]);

  return (
    <ThemeContext.Provider value={{ colors: props.colors }}>
      {props.children}
    </ThemeContext.Provider>
  );
});

ThemeProvider.displayName = "ThemeProvider";
