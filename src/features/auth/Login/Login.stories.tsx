import type { Meta, StoryObj } from "@storybook/react-vite";

import { Login } from "./Login";

const meta = {
  title: "Features/auth/Login",
  component: Login,
  args: {
    onSubmit: () => {},
  },
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const error: Story = {
  args: {
    authError: "Something went wrong",
  },
};
