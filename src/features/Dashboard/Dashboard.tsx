import { useMemo, useState } from "react";

import type { Stat, StatsResponse } from "@/api";
import {
  AreaChart,
  BarChart,
  type ChartData,
  LineChart,
  PieChart,
} from "@/components/Charts";
import { Layout } from "@/components/Layout";
import { StatsTable } from "@/components/StatsTable";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group.tsx";

const chartTypesDictionary = [
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

const getChartData = (
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

const getPieChartData = (
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

type ChartId = (typeof chartTypesDictionary)[number]["id"];

const getTableData = (stats: Stat[], labelMap: Record<string, string>) => {
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

export const Dashboard = ({ data }: { data: StatsResponse }) => {
  const { stats, plantTypes } = data;
  const [selectedTab, setSelectedTab] = useState<ChartId>("harvested");

  const plantIds = useMemo(() => plantTypes.map((p) => p.id), [plantTypes]);
  const colorMap = useMemo(
    () => Object.fromEntries(plantTypes.map((p) => [p.id, p.color])),
    [plantTypes],
  );
  const labelMap = useMemo(
    () => Object.fromEntries(plantTypes.map((p) => [p.id, p.label])),
    [plantTypes],
  );

  const onTabChangeHandler = (value: string) => {
    if (value && chartTypesDictionary.some((item) => item.id === value)) {
      setSelectedTab(value as ChartId);
    }
  };

  const tableData = useMemo(
    () => getTableData(stats, labelMap),
    [stats, labelMap],
  );

  return (
    <Layout>
      <div className="mb-6">
        <ToggleGroup
          className="w-full"
          onValueChange={onTabChangeHandler}
          value={selectedTab}
          variant="outline"
          type="single"
        >
          {chartTypesDictionary.map((i) => (
            <ToggleGroupItem value={i.id} key={i.id}>
              {i.tabTitle}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      {selectedTab === "harvested" && (
        <div className="h-[300px] w-full mb-20">
          <h2 className="mb-4 text-lg font-semibold">Harvested</h2>
          <LineChart
            data={getChartData(stats, "harvested")}
            chartBarsArray={plantIds}
            colors={colorMap}
          />
        </div>
      )}
      {selectedTab === "height" && (
        <div className="h-[300px] w-full mb-20">
          <h2 className="mb-4 text-lg font-semibold">Height (cm)</h2>
          <BarChart
            data={getChartData(stats, "height")}
            chartBarsArray={plantIds}
            colors={colorMap}
          />
        </div>
      )}
      {selectedTab === "soilMoisture" && (
        <div className="h-[300px] w-full mb-20">
          <h2 className="mb-4 text-lg font-semibold">Soil Moisture (%)</h2>
          <AreaChart
            data={getChartData(stats, "soilMoisture")}
            chartBarsArray={plantIds}
            colors={colorMap}
          />
        </div>
      )}
      {selectedTab === "fertilizerUsed" && (
        <div className="h-[300px] w-full mb-20">
          <h2 className="mb-4 text-lg font-semibold">Fertilizer Used (g)</h2>
          <LineChart
            data={getChartData(stats, "fertilizerUsed")}
            chartBarsArray={plantIds}
            colors={colorMap}
          />
        </div>
      )}
      {selectedTab === "harvestedDistribution" && (
        <div className="h-[300px] w-full mb-20">
          <h2 className="mb-4 text-lg font-semibold">Harvested Distribution</h2>
          <PieChart
            data={getPieChartData(stats, plantIds, labelMap)}
            chartBarsArray={plantIds}
            colors={colorMap}
          />
        </div>
      )}
      <div className="w-full">
        <h2 className="mb-4 text-lg font-semibold">Raw Data</h2>

        <StatsTable data={tableData} />
      </div>
    </Layout>
  );
};
