import {
  Bar,
  BarChart as ReBarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ChartProps } from "@/components/Charts/types.ts";

export const BarChart = ({ data, chartBarsArray, colors }: ChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReBarChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {chartBarsArray.map((key) => (
          <Bar key={key} dataKey={key} fill={colors[key]} name={key} />
        ))}
      </ReBarChart>
    </ResponsiveContainer>
  );
};
