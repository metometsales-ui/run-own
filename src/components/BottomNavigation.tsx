import { BarChart3, Dumbbell, Home, Map, Trophy } from "lucide-react";
import type { Page } from "../types/page";
import { cn } from "../utils/cn";

const items: Array<{ page: Page; label: string; icon: typeof Home }> = [
  { page: "dashboard", label: "Домой", icon: Home },
  { page: "runs", label: "Пробежки", icon: Dumbbell },
  { page: "progress", label: "Прогресс", icon: BarChart3 },
  { page: "routes", label: "Маршруты", icon: Map },
  { page: "goals", label: "Цели", icon: Trophy }
];

export function BottomNavigation({
  activePage,
  onChange
}: {
  activePage: Page;
  onChange: (page: Page) => void;
}) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-wind-black/95 px-3 pb-[calc(env(safe-area-inset-bottom)+10px)] pt-2 text-white backdrop-blur-xl sm:hidden">
      <div className="mx-auto grid max-w-md grid-cols-5 gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          const active = activePage === item.page;
          return (
            <button
              key={item.page}
              onClick={() => onChange(item.page)}
              className={cn(
                "flex h-14 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-semibold text-white/58 transition",
                active && "bg-white text-wind-black"
              )}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
