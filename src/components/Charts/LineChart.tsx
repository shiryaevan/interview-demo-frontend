import {
  Legend,
  Line,
  LineChart as LineChartRecharts,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ChartProps } from "@/components/Charts/types.ts";

export const LineChart = ({ data, chartBarsArray, colors }: ChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChartRecharts data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {chartBarsArray.map((key) => (
          <Line key={key} dataKey={key} type="monotone" stroke={colors[key]} />
        ))}
      </LineChartRecharts>
    </ResponsiveContainer>
  );
};
