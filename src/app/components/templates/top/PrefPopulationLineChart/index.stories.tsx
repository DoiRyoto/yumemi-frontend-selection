import { Meta, StoryObj } from "@storybook/react";
import { PrefPopulationLineChart } from ".";
import { getPrefectures } from "@/services/prefectures/__mock__/fixture";
import { PCStory, SPStory } from "@/tests/storybook";
import {
  getPopulations,
  getPref1Population,
} from "@/services/population/__mock__/fixture";
import { getHighChartsOptions } from "./utils";

const meta = {
  title: "PrefPopulationLineChart",
  component: PrefPopulationLineChart,
} satisfies Meta<typeof PrefPopulationLineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = getHighChartsOptions(getPrefectures.result.slice(0, 1), [
  getPref1Population,
]);
const optionsMultiPref = getHighChartsOptions(
  getPrefectures.result.slice(0, 2),
  getPopulations
);
const optionsEmpty = getHighChartsOptions([], []);

export const Default: Story = {
  args: {
    filteredPopulationDataList: [getPref1Population],
    filteredPrefDataList: getPrefectures.result.slice(0, 1),
  },
  ...PCStory,
};

export const SP: Story = {
  args: {
    filteredPopulationDataList: [getPref1Population],
    filteredPrefDataList: getPrefectures.result.slice(0, 1),
  },
  ...SPStory,
};

export const PCMultiPref: Story = {
  args: {
    filteredPopulationDataList: getPopulations,
    filteredPrefDataList: getPrefectures.result.slice(0, 2),
  },
  ...PCStory,
};

export const SPEmptyMultiPref: Story = {
  args: {
    filteredPopulationDataList: getPopulations,
    filteredPrefDataList: getPrefectures.result.slice(0, 2),
  },
  ...SPStory,
};

export const PCEmpty: Story = {
  args: {
    filteredPopulationDataList: [],
    filteredPrefDataList: [],
  },
  ...PCStory,
};

export const SPEmpty: Story = {
  args: {
    filteredPopulationDataList: [],
    filteredPrefDataList: [],
  },
  ...SPStory,
};
