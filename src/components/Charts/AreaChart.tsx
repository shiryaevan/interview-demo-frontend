import {
  Area,
  AreaChart as AreaChartRecharts,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { ChartProps } from "@/components/Charts/types.ts";

export const AreaChart = ({ data, chartBarsArray, colors }: ChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChartRecharts data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {chartBarsArray.map((key) => (
          <Area
            key={key}
            dataKey={key}
            stroke={colors[key]}
            fill={colors[key]}
            fillOpacity={0.1}
          />
        ))}
      </AreaChartRecharts>
    </ResponsiveContainer>
  );
};
