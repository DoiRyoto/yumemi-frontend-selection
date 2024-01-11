import { Suspense } from "react";
import { PrefPopulationLineChartContainer } from "./container/PrefPopulationLineChartContainer";

type Props = {
  pref?: string;
};

export const Top = async ({ pref }: Props) => {
  return (
    <div>
      <Suspense>
        <PrefPopulationLineChartContainer pref={pref} />
      </Suspense>
    </div>
  );
};
