import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MatadorDash } from "./app";

export function runMatadorDash() {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <MatadorDash />
    </StrictMode>,
  );
}
