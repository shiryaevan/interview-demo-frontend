import { Dashboard } from "@/features/Dashboard";
import { useGetStatsQuery } from "@/services/api";

export const DashboardContainer = () => {
  const {
    data = { plantTypes: [], stats: [] },
    isLoading,
    error,
  } = useGetStatsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading dashboard</div>;

  return <Dashboard data={data} />;
};
