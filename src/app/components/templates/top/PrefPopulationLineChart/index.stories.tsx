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
    highChartsOptions: options,
  },
  ...PCStory,
};

export const SP: Story = {
  args: {
    highChartsOptions: options,
  },
  ...SPStory,
};

export const PCMultiPref: Story = {
  args: {
    highChartsOptions: optionsMultiPref,
  },
  ...PCStory,
};

export const SPEmptyMultiPref: Story = {
  args: {
    highChartsOptions: optionsMultiPref,
  },
  ...SPStory,
};

export const PCEmpty: Story = {
  args: {
    highChartsOptions: optionsEmpty,
  },
  ...PCStory,
};

export const SPEmpty: Story = {
  args: {
    highChartsOptions: optionsEmpty,
  },
  ...SPStory,
};
