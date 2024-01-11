import { Meta, StoryObj } from "@storybook/react";
import { LineChart } from ".";
import { PCStory, SPStory } from "@/tests/storybook";
import { options, optionsEmpty } from "./constants";

const meta = {
  title: "LineChart",
  component: LineChart,
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: options,
  },
  ...PCStory,
};

export const Empty: Story = {
  args: {
    options: optionsEmpty,
  },
  ...PCStory,
};

export const SP: Story = {
  args: {
    options: options,
  },
  ...SPStory,
};

export const SPEmpty: Story = {
  args: {
    options: optionsEmpty,
  },
  ...SPStory,
};
