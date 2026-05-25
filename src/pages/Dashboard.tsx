import { Activity, Clock3, Flame, Gauge, Route } from "lucide-react";
import { motion } from "framer-motion";
import type { Run } from "../types/run";
import { getWeeklyStats } from "../utils/stats";
import { StatsCard } from "../components/StatsCard";
import { RunCard } from "../components/RunCard";
import { ProgressChart } from "../components/ProgressChart";

export function Dashboard({
  runs,
  onOpenRun
}: {
  runs: Run[];
  onOpenRun: (run: Run) => void;
}) {
  const stats = getWeeklyStats(runs);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <section className="rounded-[28px] bg-wind-black p-5 text-white shadow-premium sm:p-8">
        <p className="text-sm font-semibold text-white/60">Неделя 20-25 мая</p>
        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="max-w-[11ch] text-5xl font-black leading-[0.9] sm:text-7xl">Привет, Ирина</h2>
            <p className="mt-4 max-w-md text-sm font-semibold leading-6 text-white/62">
              5 тренировок закрыты. Самая длинная пробежка уже в активе, осталось сохранить легкость.
            </p>
          </div>
          <div className="hidden rounded-2xl bg-wind-lime px-5 py-4 text-right text-wind-black sm:block">
            <span className="text-xs font-black uppercase">Streak</span>
            <strong className="block text-4xl font-black">4</strong>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        <StatsCard label="Километры" value={stats.distance} suffix="км" icon={Route} dark />
        <StatsCard label="Пробежки" value={stats.runs} icon={Activity} />
        <StatsCard label="Время" value={stats.duration} icon={Clock3} />
        <StatsCard label="Средний темп" value={stats.avgPace} suffix="/км" icon={Gauge} />
        <StatsCard label="Longest run" value={stats.longest} suffix="км" icon={Flame} />
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-black">Последние пробежки</h2>
          <button className="text-sm font-black text-wind-black">Все</button>
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          {runs.slice(0, 4).map((run) => (
            <RunCard key={run.id} run={run} onClick={() => onOpenRun(run)} />
          ))}
        </div>
      </section>

      <ProgressChart runs={runs} />
    </motion.div>
  );
}
