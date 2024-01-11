import React from "react";
import { PrefPopulationLineChart } from "../../PrefPopulationLineChart";
import { getPrefectures } from "@/services/prefectures/__mock__/fixture";
import { getPopulations } from "@/services/population/__mock__/fixture";
import { getHighChartsOptions } from "../../PrefPopulationLineChart/utils";

type Props = {
  pref?: string;
};

export const PrefPopulationLineChartContainer = async ({ pref }: Props) => {
  const rowPrefData = getPrefectures; // TODO: Mockを実際のデータフェッチに置き換える
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
  const filteredPopulationDataList = getPopulations; // TODO: Mockを実際のデータフェッチに置き換える

  const highChartsOptions = getHighChartsOptions(
    filteredPrefDataList,
    filteredPopulationDataList
  );

  return <PrefPopulationLineChart highChartsOptions={highChartsOptions} />;
};
