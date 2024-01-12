import { Meta, StoryObj } from "@storybook/react";
import { ToggleButton } from ".";

const meta = {
  title: "ToggleButton",
  component: ToggleButton,
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "TEST",
  },
};

export const Selected: Story = {
  args: {
    children: "TEST",
    defaultIsChecked: true,
  },
};
