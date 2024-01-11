import { render } from "@testing-library/react";
import { PrefPopulationLineChart } from ".";
import { getPrefectures } from "@/services/prefectures/__mock__/fixture";
import {
  getPopulations,
  getPref1Population,
} from "@/services/population/__mock__/fixture";
import { getHighChartsOptions } from "./utils";

describe("PrefPopulationLineChart", () => {
  test("Snapshot: データが空の場合", () => {
    const optionsEmpty = getHighChartsOptions([], []);
    const { container } = render(
      <PrefPopulationLineChart highChartsOptions={optionsEmpty} />
    );
    expect(container).toMatchSnapshot();
  });

  test("Snapshot: 北海道のみの場合", () => {
    const options = getHighChartsOptions(getPrefectures.result.slice(0, 1), [
      getPref1Population,
    ]);
    const { container } = render(
      <PrefPopulationLineChart highChartsOptions={options} />
    );
    expect(container).toMatchSnapshot();
  });

  test("Snapshot: 北海道＋青森県の場合", () => {
    const optionsMultiPref = getHighChartsOptions(
      getPrefectures.result.slice(0, 2),
      getPopulations
    );
    const { container } = render(
      <PrefPopulationLineChart highChartsOptions={optionsMultiPref} />
    );
    expect(container).toMatchSnapshot();
  });
});
