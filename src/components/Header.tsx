import { Bell, Settings2 } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "../data/runs";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-30 -mx-4 mb-2 flex items-center justify-between bg-wind-fog/90 px-4 pb-3 pt-[calc(env(safe-area-inset-top)+14px)] backdrop-blur-xl sm:static sm:mx-0 sm:bg-transparent sm:px-0 sm:pt-2"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-wind-muted">Быстрее ветра</p>
        <h1 className="mt-1 text-2xl font-black text-wind-black">Привет, {profile.name}</h1>
      </div>
      <div className="flex items-center gap-2">
        <button className="grid size-11 place-items-center rounded-xl bg-white text-wind-black shadow-lift" aria-label="Уведомления">
          <Bell size={19} />
        </button>
        <button className="grid size-11 place-items-center rounded-xl bg-wind-black text-white shadow-lift" aria-label="Настройки">
          <Settings2 size={19} />
        </button>
      </div>
    </motion.header>
  );
}
