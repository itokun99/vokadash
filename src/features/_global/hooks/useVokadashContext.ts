import { useContext } from "react";
import { VokadashContext } from "../context";

export const useVokadashContext = () => {
  const context = useContext(VokadashContext);
  return context;
};
