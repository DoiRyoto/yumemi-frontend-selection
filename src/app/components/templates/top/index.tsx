import { Suspense } from "react";
import { PrefPopulationLineChartContainer } from "./container/PrefPopulationLineChartContainer";
import { PrefToggleListContainer } from "./container/PrefToggleListContainer";

type Props = {
  pref?: string;
};

export const Top = async ({ pref }: Props) => {
  return (
    <main className="top">
      <h1 className="top-title">都道府県</h1>
      <Suspense>
        <PrefToggleListContainer />
      </Suspense>
      <Suspense>
        <PrefPopulationLineChartContainer pref={pref} />
      </Suspense>
    </main>
  );
};
