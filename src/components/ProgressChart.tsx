import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import type { Run } from "../types/run";
import { getChartData } from "../utils/stats";
import { Card } from "./ui/card";

export function ProgressChart({ runs }: { runs: Run[] }) {
  const data = getChartData(runs);

  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <Card>
        <div className="mb-5">
          <h2 className="text-lg font-black text-wind-black">Weekly mileage</h2>
          <p className="text-sm font-semibold text-wind-muted">Дистанция по дням</p>
        </div>
        <div className="h-52">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#737373" }} />
              <Tooltip cursor={{ fill: "#F5F5F5" }} />
              <Bar dataKey="distance" radius={[10, 10, 4, 4]} fill="#0B0B0B" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
      <Card className="bg-wind-black text-white">
        <div className="mb-5">
          <h2 className="text-lg font-black">Monthly progress</h2>
          <p className="text-sm font-semibold text-white/60">Ритм и стабильность</p>
        </div>
        <div className="h-52">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "rgba(255,255,255,.55)" }} />
              <Tooltip contentStyle={{ background: "#fff", border: 0, borderRadius: 16 }} />
              <Area type="monotone" dataKey="distance" stroke="#B7FF00" fill="#B7FF00" fillOpacity={0.18} strokeWidth={4} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </section>
  );
}
