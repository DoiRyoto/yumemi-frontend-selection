import { Meta, StoryObj } from "@storybook/react";
import { PrefToggleButton } from ".";
import { getPrefectures } from "@/services/prefectures/__mock__/fixture";

const meta = {
  title: "PrefToggleButton",
  component: PrefToggleButton,
} satisfies Meta<typeof PrefToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    prefData: getPrefectures.result[0],
  },
};

export const Selected: Story = {
  args: {
    prefData: getPrefectures.result[0],
    checked: true,
  },
};
