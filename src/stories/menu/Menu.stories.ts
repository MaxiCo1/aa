import type { Meta, StoryObj } from "@storybook/react";
import Menu from "@/components/menu/Menu";

const meta = {
  title: "Menu/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    links: [
      { title: "Inicio", href: "/" },
      { title: "Explorar", href: "/explore" },
      { title: "Perfil", href: "/profile" },
    ],
  },
};