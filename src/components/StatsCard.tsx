import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";

export function StatsCard({
  label,
  value,
  suffix,
  icon: Icon,
  dark = false
}: {
  label: string;
  value: string | number;
  suffix?: string;
  icon: LucideIcon;
  dark?: boolean;
}) {
  return (
    <motion.div whileHover={{ y: -2 }}>
      <Card className={dark ? "bg-wind-black text-white" : ""}>
        <div className="mb-5 flex items-center justify-between">
          <span className={dark ? "text-sm text-white/60" : "text-sm text-wind-muted"}>{label}</span>
          <span className={dark ? "rounded-xl bg-wind-lime p-2 text-wind-black" : "rounded-xl bg-wind-fog p-2 text-wind-black"}>
            <Icon size={18} />
          </span>
        </div>
        <div className="flex items-end gap-1">
          <strong className="text-3xl font-black leading-none">{value}</strong>
          {suffix ? <span className={dark ? "pb-1 text-sm text-white/60" : "pb-1 text-sm text-wind-muted"}>{suffix}</span> : null}
        </div>
      </Card>
    </motion.div>
  );
}
