import { Suspense } from "react";
import { PrefPopulationLineChartContainer } from "./container/PrefPopulationLineChartContainer";
import { PrefToggleListContainer } from "./container/PrefToggleListContainer";
import { Accordion } from "../../atoms/Accordion";

type Props = {
  pref?: string;
};

export const Top = async ({ pref }: Props) => {
  return (
    <main className="top">
      <Accordion label="都道府県" defaultIsOpen={true}>
        <Suspense>
          <PrefToggleListContainer />
        </Suspense>
      </Accordion>
      <Suspense>
        <PrefPopulationLineChartContainer pref={pref} />
      </Suspense>
    </main>
  );
};
