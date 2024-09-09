import { useContext } from "react";
import { SidebarContext, VokadashContext } from "../context";

export const useVokadashContext = () => {
  const context = useContext(VokadashContext);
  return context;
};

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  return context;
};
