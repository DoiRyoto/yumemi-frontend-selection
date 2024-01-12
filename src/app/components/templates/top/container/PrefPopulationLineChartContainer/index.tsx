import React from "react";
import { PrefPopulationLineChart } from "../../PrefPopulationLineChart";
import { getHighChartsOptions } from "../../PrefPopulationLineChart/utils";
import { fetchPrefectureNames } from "@/services/prefectures";
import { fetchPopulationsByPrefCodes } from "@/services/population";

type Props = {
  pref?: string;
  populationType?: string;
};

export const PrefPopulationLineChartContainer = async ({
  pref,
  populationType,
}: Props) => {
  const rowPrefData = await fetchPrefectureNames();
  const allPrefDataList = rowPrefData.result;

  const prefCodes =
    !pref || pref.length === 0
      ? []
      : Array.from(
          new Set(
            pref
              .split(",")
              .map(Number)
              .sort((a, b) => a - b)
          )
        );
  const filteredPrefDataList = allPrefDataList.filter((item) =>
    prefCodes.includes(item.prefCode)
  );
  const filteredPopulationDataList = await fetchPopulationsByPrefCodes(
    prefCodes
  );

  return (
    <PrefPopulationLineChart
      filteredPopulationDataList={filteredPopulationDataList}
      filteredPrefDataList={filteredPrefDataList}
    />
  );
};
