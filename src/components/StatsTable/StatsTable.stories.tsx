import type { Meta, StoryObj } from "@storybook/react-vite";

import { data } from "./__MOCK__";
import { StatsTable } from "./StatsTable.tsx";

const meta = {
  title: "Components/StatsTable",
  component: StatsTable,
  args: { data },
} satisfies Meta<typeof StatsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
