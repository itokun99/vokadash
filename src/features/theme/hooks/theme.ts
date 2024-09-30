import { useContext } from "react";
import { ThemeContext } from "../contexts";

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  return themeContext;
};
