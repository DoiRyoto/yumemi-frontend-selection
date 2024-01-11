import { fetchPopulationReturn } from "@/services/population/types";
import { fetchPrefectureReturn } from "@/services/prefectures/types";
import { SeriesOptionsType } from "highcharts";

const toHighchartsSeries = (
  prefecture: fetchPrefectureReturn,
  population: fetchPopulationReturn
): SeriesOptionsType => {
  return {
    type: "line",
    name: prefecture.prefName,
    data: population.result.data[0].data.map((v) => v.value),
  };
};

export const getHighChartsOptions = (
  prefDataList: fetchPrefectureReturn[],
  populationDataList: fetchPopulationReturn[]
) => {
  const series = prefDataList.map((prefData, i) => {
    const populationData = populationDataList[i];
    return toHighchartsSeries(prefData, populationData);
  });

  const options: Highcharts.Options = {
    title: {
      text: "各都道府県の年次(横軸)と人口数(縦軸)の関係",
      align: "left",
    },

    yAxis: {
      title: {
        text: "人口数",
      },
    },

    xAxis: {
      title: {
        text: "年次",
      },
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 1980,
        pointInterval: 5,
      },
    },

    series: series,

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };

  return options;
};
