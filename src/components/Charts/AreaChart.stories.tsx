import type { Meta, StoryObj } from "@storybook/react-vite";

import { chartBarsArray, colors, data } from "@/components/Charts/__MOCK__";

import { AreaChart } from "./AreaChart";

const meta = {
  title: "Components/Charts/AreaChart",
  component: AreaChart,
  decorators: [
    (Story) => (
      <div className="h-[300px] w-full mb-20">
        <Story />
      </div>
    ),
  ],
  args: { data, colors, chartBarsArray },
} satisfies Meta<typeof AreaChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
