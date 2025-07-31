import {
  Cell,
  Legend,
  Pie,
  PieChart as PieChartRecharts,
  ResponsiveContainer,
} from "recharts";

import type { ChartProps } from "@/components/Charts/types.ts";

export const PieChart = ({
  data,
  chartBarsArray,
  colors,
}: Omit<ChartProps, "data"> & { data: { name: string; value: number }[] }) => {
  console.log("data", data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChartRecharts>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
          dataKey="value"
        >
          <Legend />
          {chartBarsArray.map((key) => (
            <Cell key={key} fill={colors[key]} />
          ))}
        </Pie>
      </PieChartRecharts>
    </ResponsiveContainer>
  );
};
