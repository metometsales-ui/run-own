import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import type { Run } from "../types/run";
import { formatDate, getRunTypeLabel } from "../utils/format";
import { Card } from "./ui/card";
import { MiniRoute } from "./MiniRoute";

export function RunCard({ run, onClick }: { run: Run; onClick: () => void }) {
  return (
    <motion.button
      layout
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className="block w-full text-left"
    >
      <Card className="grid grid-cols-[1fr_116px] gap-4 overflow-hidden p-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-wind-lime px-3 py-1 text-xs font-black text-wind-black">
              {getRunTypeLabel(run.type)}
            </span>
            <span className="text-xs font-semibold text-wind-muted">{formatDate(run.date)}</span>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <strong className="text-3xl font-black text-wind-black">{run.distance}</strong>
            <span className="pb-1 text-sm font-semibold text-wind-muted">км</span>
          </div>
          <div className="mt-3 flex items-center gap-3 text-sm font-semibold text-wind-muted">
            <span>{run.pace}/км</span>
            <span>{run.duration.slice(3)}</span>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-wind-muted">
            <MapPin size={14} />
            <span>{run.city}</span>
          </div>
        </div>
        <MiniRoute route={run.route} />
      </Card>
    </motion.button>
  );
}
