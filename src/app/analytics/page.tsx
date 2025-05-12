
import { fetchAnalyticsData } from "@/utils/supabase/server";
import Chart from "@/components/ui/chart";

export default async function AnalyticsPage() {
  const data = await fetchAnalyticsData();
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>
      <p className="mb-8 text-muted-foreground">
        Visualize your usage, engagement, and system trends. All charts update in real time.
      </p>
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg p-6 shadow-md">
        <Chart
          data={data}
          width={700}
          height={320}
          theme="light"
        />
      </div>
    </div>
  );
}
