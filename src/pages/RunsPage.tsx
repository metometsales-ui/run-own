import { ArrowDownUp, CalendarDays, Gauge, Route } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { Run, RunType } from "../types/run";
import { getRunTypeLabel } from "../utils/format";
import { RunCard } from "../components/RunCard";
import { Button } from "../components/ui/button";
import { cn } from "../utils/cn";

const filters: Array<RunType | "All"> = ["All", "Easy Run", "Tempo Run", "Long Run", "Recovery Run"];
type SortKey = "date" | "distance" | "pace";
const sortOptions: Array<{ key: SortKey; icon: typeof CalendarDays; label: string }> = [
  { key: "date", icon: CalendarDays, label: "Дата" },
  { key: "distance", icon: Route, label: "Дистанция" },
  { key: "pace", icon: Gauge, label: "Темп" }
];

export function RunsPage({ runs, onOpenRun }: { runs: Run[]; onOpenRun: (run: Run) => void }) {
  const [filter, setFilter] = useState<RunType | "All">("All");
  const [sort, setSort] = useState<SortKey>("date");

  const visibleRuns = useMemo(() => {
    return runs
      .filter((run) => filter === "All" || run.type === filter)
      .sort((a, b) => {
        if (sort === "distance") return b.distance - a.distance;
        if (sort === "pace") return a.pace.localeCompare(b.pace);
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  }, [filter, runs, sort]);

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
      <section className="rounded-[28px] bg-white p-5 shadow-lift">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-wind-muted">Журнал</p>
            <h2 className="text-3xl font-black">Все тренировки</h2>
          </div>
          <Button className="size-11 px-0" aria-label="Сортировка">
            <ArrowDownUp size={18} />
          </Button>
        </div>
        <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={cn(
                "shrink-0 rounded-xl bg-wind-fog px-4 py-2 text-sm font-black text-wind-muted",
                filter === item && "bg-wind-black text-white"
              )}
            >
              {item === "All" ? "Все" : getRunTypeLabel(item)}
            </button>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {sortOptions.map(({ key, icon: SortIcon, label }) => {
            return (
              <button
                key={key}
                onClick={() => setSort(key)}
                className={cn(
                  "flex h-11 items-center justify-center gap-1.5 rounded-xl bg-wind-fog text-xs font-black text-wind-muted",
                  sort === key && "bg-wind-lime text-wind-black"
                )}
              >
                <SortIcon size={15} />
                {label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="grid gap-3 lg:grid-cols-2">
        <AnimatePresence>
          {visibleRuns.map((run) => (
            <RunCard key={run.id} run={run} onClick={() => onOpenRun(run)} />
          ))}
        </AnimatePresence>
      </section>
    </motion.div>
  );
}
