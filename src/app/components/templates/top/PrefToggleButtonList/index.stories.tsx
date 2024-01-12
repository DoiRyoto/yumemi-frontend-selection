import { Meta, StoryObj } from "@storybook/react";
import { PrefToggleButtonList } from ".";
import { getPrefectures } from "@/services/prefectures/__mock__/fixture";
import { PCStory, SPStory } from "@/tests/storybook";

const meta = {
  title: "PrefToggleButtonList",
  component: PrefToggleButtonList,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof PrefToggleButtonList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    prefDataList: getPrefectures.result,
  },
  ...PCStory,
};

export const SP: Story = {
  args: {
    prefDataList: getPrefectures.result,
  },
  ...SPStory,
};
