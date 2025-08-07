import { describe, expect, it } from "vitest";

import type { StatsResponse } from "@/api";

import { getChartData, getPieChartData, getTableData } from "./utils";

const sampleStats: StatsResponse = {
  plantTypes: [
    { id: "roses", label: "Roses", color: "#FF6384" },
    { id: "hydrangeas", label: "Hydrangeas", color: "#36A2EB" },
    { id: "tulips", label: "Tulips", color: "#FF9F40" },
    { id: "lilies", label: "Lilies", color: "#4BC0C0" },
    { id: "peonies", label: "Peonies", color: "#9966FF" },
  ],
  stats: [
    {
      date: "2025-08-01",
      plants: [
        {
          id: "roses",
          displayName: "Roses",
          harvested: 141,
          height: 133.1,
          growthRate: 0.6,
          fertilizerUsed: 268,
          waterUsed: 93,
          soilMoisture: 31,
          sunlightHours: 8,
          pestTreatments: 2,
          notes: "Villa curto curto absum.",
        },
        {
          id: "hydrangeas",
          displayName: "Hydrangeas",
          harvested: 161,
          height: 75,
          growthRate: 2.5,
          fertilizerUsed: 260,
          waterUsed: 91,
          soilMoisture: 34,
          sunlightHours: 12,
          pestTreatments: 2,
          notes: "Temporibus balbus amita tero vicinus.",
        },
      ],
    },
    {
      date: "2025-08-02",
      plants: [
        {
          id: "roses",
          displayName: "Roses",
          harvested: 116,
          height: 62.3,
          growthRate: 2.1,
          fertilizerUsed: 268,
          waterUsed: 15,
          soilMoisture: 35,
          sunlightHours: 5,
          pestTreatments: 1,
          notes: "Vulgus tego temperantia.",
        },
      ],
    },
  ],
};

const plantIds = sampleStats.plantTypes.map((p) => p.id);
const labelMap = Object.fromEntries(
  sampleStats.plantTypes.map((p) => [p.id, p.label]),
);

describe("getChartData", () => {
  it("should return correct data for harvested chart", () => {
    const result = getChartData(sampleStats.stats, "harvested");
    expect(result).toEqual([
      { date: "2025-08-01", roses: 141, hydrangeas: 161 },
      { date: "2025-08-02", roses: 116 },
    ]);
  });
});

describe("getPieChartData", () => {
  it("should aggregate harvested values by plant id", () => {
    const result = getPieChartData(sampleStats.stats, plantIds, labelMap);
    expect(result).toEqual([
      { name: "Roses", value: 257 },
      { name: "Hydrangeas", value: 161 },
      { name: "Tulips", value: 0 },
      { name: "Lilies", value: 0 },
      { name: "Peonies", value: 0 },
    ]);
  });
});

describe("getTableData", () => {
  it("should flatten plant data with appropriate keys", () => {
    const result = getTableData(sampleStats.stats, labelMap);
    expect(result).toEqual([
      {
        harvested: 141,
        height: 133.1,
        fertilizerUsed: 268,
        localIndex: 0,
        soilMoisture: 31,
        key: "2025-08-01-roses",
        name: "Roses",
        plantsLength: 2,
        date: "2025-08-01",
      },
      {
        harvested: 161,
        height: 75,
        fertilizerUsed: 260,
        localIndex: 1,
        soilMoisture: 34,
        key: "2025-08-01-hydrangeas",
        name: "Hydrangeas",
        plantsLength: 2,
        date: "2025-08-01",
      },
      {
        harvested: 116,
        height: 62.3,
        fertilizerUsed: 268,
        localIndex: 0,
        soilMoisture: 35,
        key: "2025-08-02-roses",
        name: "Roses",
        plantsLength: 1,
        date: "2025-08-02",
      },
    ]);
  });
});
