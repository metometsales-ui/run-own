import { ArrowLeft, Clock3, Mountain, Route, StickyNote } from "lucide-react";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import type { Run } from "../types/run";
import { formatDate, getRunTypeLabel } from "../utils/format";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

const RunMap = lazy(() => import("../components/RunMap").then((module) => ({ default: module.RunMap })));

export function RunDetailsPage({ run, onBack }: { run: Run; onBack: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
      <button onClick={onBack} className="flex items-center gap-2 text-sm font-black text-wind-muted">
        <ArrowLeft size={18} />
        Назад
      </button>
      <section className="rounded-[28px] bg-wind-black p-5 text-white shadow-premium sm:p-8">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-wind-lime px-3 py-1 text-xs font-black text-wind-black">
            {getRunTypeLabel(run.type)}
          </span>
          <span className="text-sm font-semibold text-white/60">{formatDate(run.date)}</span>
        </div>
        <h2 className="mt-6 text-5xl font-black leading-none">{run.distance} км</h2>
        <p className="mt-3 text-sm font-semibold text-white/62">{run.city}</p>
      </section>

      <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Card>
          <Clock3 className="mb-5 text-wind-muted" size={20} />
          <p className="text-sm font-semibold text-wind-muted">Длительность</p>
          <strong className="mt-1 block text-2xl font-black">{run.duration}</strong>
        </Card>
        <Card>
          <Route className="mb-5 text-wind-muted" size={20} />
          <p className="text-sm font-semibold text-wind-muted">Темп</p>
          <strong className="mt-1 block text-2xl font-black">{run.pace}/км</strong>
        </Card>
        <Card>
          <Mountain className="mb-5 text-wind-muted" size={20} />
          <p className="text-sm font-semibold text-wind-muted">Elevation</p>
          <strong className="mt-1 block text-2xl font-black">{run.elevation} м</strong>
        </Card>
        <Card>
          <StickyNote className="mb-5 text-wind-muted" size={20} />
          <p className="text-sm font-semibold text-wind-muted">Заметки</p>
          <strong className="mt-1 block text-sm font-black">{run.notes}</strong>
        </Card>
      </section>

      <Suspense fallback={<div className="h-[320px] rounded-2xl bg-wind-black" />}>
        <RunMap route={run.route} />
      </Suspense>

      <section className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <Card>
          <h3 className="mb-4 text-lg font-black">Splits</h3>
          <div className="space-y-3">
            {run.splits.map((split) => (
              <div key={split.km} className="grid grid-cols-[52px_1fr_52px] items-center gap-3">
                <span className="text-sm font-black text-wind-muted">{split.km} км</span>
                <div className="h-2 overflow-hidden rounded-full bg-wind-fog">
                  <div className="h-full rounded-full bg-wind-lime" style={{ width: `${92 - split.km * 5}%` }} />
                </div>
                <span className="text-right text-sm font-black">{split.pace}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card className="bg-wind-black text-white">
          <h3 className="text-lg font-black">Следующие расширения</h3>
          <div className="mt-4 grid gap-2">
            {["GPX import", "Apple Health", "Garmin Sync", "AI coaching"].map((item) => (
              <div key={item} className="rounded-xl bg-white/8 px-4 py-3 text-sm font-semibold text-white/70">
                {item}
              </div>
            ))}
          </div>
          <Button className="mt-5 w-full bg-wind-lime text-wind-black">Запланировать цель</Button>
        </Card>
      </section>
    </motion.div>
  );
}
