import { MatadorDashRouter } from "@/core/libs/router";
import "../core/assets/styles/index.css";
import { MatadorDashQuery } from "@/core/libs/query";

export const MatadorDash = () => {
  return (
    <>
      <MatadorDashQuery>
        <MatadorDashRouter />
      </MatadorDashQuery>
    </>
  );
};
