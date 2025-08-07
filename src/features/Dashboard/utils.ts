import type { Stat, StatsResponse } from "@/api";
import type { ChartData } from "@/components/Charts";

export const chartTypesDictionary = [
  {
    id: "harvested",
    tabTitle: "Harvested",
    title: "Harvested",
  },
  {
    id: "height",
    tabTitle: "Height",
    title: "Height (cm)",
  },
  {
    id: "soilMoisture",
    tabTitle: "Soil Moisture",
    title: "Soil Moisture (%)",
  },
  {
    id: "fertilizerUsed",
    tabTitle: "Fertilizer Used",
    title: "Fertilizer Used (g)",
  },
  {
    id: "harvestedDistribution",
    tabTitle: "Harvested Distribution",
    title: "Harvested Distribution",
  },
] as const;

export const getChartData = (
  data: StatsResponse["stats"] = [],
  type: "harvested" | "height" | "soilMoisture" | "fertilizerUsed",
) => {
  return data.map((day) =>
    day.plants?.reduce<ChartData>(
      (acc, curr) => ({ ...acc, [curr.id]: curr[type] }),
      {
        date: day.date,
      },
    ),
  );
};

export const getPieChartData = (
  data: StatsResponse["stats"] = [],
  plantIds: string[],
  labelsDict: Record<string, string>,
) => {
  return plantIds.map((id) => {
    const total = data.reduce((sum, day) => {
      const plant = day.plants.find((p) => p.id === id);
      return sum + (plant?.harvested || 0);
    }, 0);
    return { name: labelsDict[id] ?? id, value: total };
  });
};

export type ChartId = (typeof chartTypesDictionary)[number]["id"];

export const getTableData = (
  stats: Stat[],
  labelMap: Record<string, string>,
) => {
  return stats.flatMap((day) =>
    day.plants.map(
      (
        { harvested, id, fertilizerUsed, height, soilMoisture },
        localIndex,
      ) => ({
        harvested,
        height,
        fertilizerUsed,
        localIndex,
        soilMoisture,
        key: `${day.date}-${id}`,
        name: labelMap[id] ?? id,
        plantsLength: day.plants.length,
        date: day.date,
      }),
    ),
  );
};
