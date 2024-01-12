import { Meta, StoryObj } from "@storybook/react";
import { SelectFilterOption } from ".";

const meta = {
  title: "SelectFilterOption",
  component: SelectFilterOption,
} satisfies Meta<typeof SelectFilterOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: "総人口", value: "0" },
      { label: "年少人口", value: "1" },
      { label: "生産年齢人口", value: "2" },
      { label: "老年人口", value: "3" },
    ],
    selectProps: {},
  },
};
