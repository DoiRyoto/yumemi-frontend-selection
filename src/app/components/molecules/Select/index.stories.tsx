import { Meta, StoryObj } from "@storybook/react";
import { Select } from ".";

const meta = {
  title: "Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <option>総人口</option>
        <option>年少人口</option>
        <option>生産年齢人口</option>
        <option>老年人口</option>
      </>
    ),
  },
};
