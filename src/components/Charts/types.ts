export type ChartData = {
  date: string;
  [plantId: string]: string | number;
};

export type ChartProps = {
  data: ChartData[];
  chartBarsArray: string[];
  colors: Record<string, string>;
};
