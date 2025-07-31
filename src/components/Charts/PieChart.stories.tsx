import type { Meta, StoryObj } from "@storybook/react-vite";

import { chartBarsArray, colors, pieData } from "@/components/Charts/__MOCK__";

import { PieChart } from "./PieChart";

const meta = {
  title: "Components/Charts/PieChart",
  component: PieChart,
  decorators: [
    (Story) => (
      <div className="h-[300px] w-full mb-20">
        <Story />
      </div>
    ),
  ],
  args: { data: pieData, colors, chartBarsArray },
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
