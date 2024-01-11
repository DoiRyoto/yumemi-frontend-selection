import React from "react";
import { LineChart } from "@/app/components/organisms/LineChart";

type Props = {
  highChartsOptions: Highcharts.Options;
};

export const PrefPopulationLineChart = ({ highChartsOptions }: Props) => {
  return <LineChart options={highChartsOptions} />;
};
