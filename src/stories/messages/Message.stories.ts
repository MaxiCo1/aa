import type { Meta, StoryObj } from "@storybook/react";
import Message from "@/components/messages/Message";

const meta = {
  title: "Messages/Message",
  component: Message,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    message: {
      message: "Mensaje de prubea",
      name: "Anakin Skywalker",
      username: "Anakin",
    },
  },
};
