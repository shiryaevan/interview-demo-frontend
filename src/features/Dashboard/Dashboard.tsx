import * as Tabs from "@radix-ui/react-tabs";
import { useMemo, useState } from "react";

import type { StatsResponse } from "@/api";
import { AreaChart, BarChart, LineChart, PieChart } from "@/components/Charts";
import { Layout } from "@/components/Layout";
import { StatsTable } from "@/components/StatsTable";
import {
  type ChartId,
  chartTypesDictionary,
  getChartData,
  getPieChartData,
  getTableData,
} from "@/features/Dashboard/utils.ts";

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
      <Tabs.Root
        value={selectedTab}
        onValueChange={onTabChangeHandler}
        className="w-full mb-6"
      >
        <Tabs.List className="flex flex-wrap sm:flex-nowrap sm:flex-row flex-col gap-2">
          {chartTypesDictionary.map((i) => (
            <Tabs.Trigger
              key={i.id}
              value={i.id}
              className="px-3 py-1 rounded border text-sm cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {i.tabTitle}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>

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
