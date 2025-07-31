import type { Meta, StoryObj } from "@storybook/react-vite";

import { chartBarsArray, colors, data } from "@/components/Charts/__MOCK__";

import { BarChart } from "./BarChart";

const meta = {
  title: "Components/Charts/BarChart",
  component: BarChart,
  decorators: [
    (Story) => (
      <div className="h-[300px] w-full mb-20">
        <Story />
      </div>
    ),
  ],
  args: { data, colors, chartBarsArray },
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
