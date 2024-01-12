import { fetchPopulationReturn } from "@/services/population/types";
import { fetchPrefectureReturn } from "@/services/prefectures/types";
import { SeriesOptionsType } from "highcharts";

const toHighchartsSeries = (
  prefecture: fetchPrefectureReturn,
  population: fetchPopulationReturn,
  populationType: string
): SeriesOptionsType => {
  const data = population.result.data.find(
    (item) => item.label === populationType
  );
  const dataUntil2020 = data
    ? data.data.filter((entry) => entry.year <= 2020)
    : [];
  return {
    type: "line",
    name: prefecture.prefName,
    data: dataUntil2020.map((d) => d.value),
  };
};

export const getHighChartsOptions = (
  prefDataList: fetchPrefectureReturn[],
  populationDataList: fetchPopulationReturn[],
  popolationType?: string
) => {
  const series = prefDataList.map((prefData, i) => {
    const populationData = populationDataList[i];
    return toHighchartsSeries(
      prefData,
      populationData,
      popolationType || "総人口"
    );
  });

  console.log(series);

  const options: Highcharts.Options = {
    title: {
      text: `年次(横軸)と各都道府県の${popolationType || "総人口"}(縦軸)の関係`,
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
