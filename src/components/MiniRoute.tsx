import { useMemo } from "react";
import type { LatLng } from "../types/run";

export function MiniRoute({ route }: { route: LatLng[] }) {
  const points = useMemo(() => {
    if (!route.length) return "";
    const lats = route.map(([lat]) => lat);
    const lngs = route.map(([, lng]) => lng);
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLng = Math.min(...lngs);
    const maxLng = Math.max(...lngs);
    const latRange = maxLat - minLat || 1;
    const lngRange = maxLng - minLng || 1;

    return route
      .map(([lat, lng]) => {
        const x = 12 + ((lng - minLng) / lngRange) * 76;
        const y = 88 - ((lat - minLat) / latRange) * 76;
        return `${x},${y}`;
      })
      .join(" ");
  }, [route]);

  return (
    <div className="h-full min-h-[132px] overflow-hidden rounded-xl bg-wind-black">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <rect width="100" height="100" fill="#0B0B0B" />
        <path d="M12 28 C34 12 58 18 88 8" fill="none" stroke="#222" strokeWidth="10" strokeLinecap="round" />
        <path d="M5 78 C32 64 57 72 95 49" fill="none" stroke="#222" strokeWidth="8" strokeLinecap="round" />
        <polyline points={points} fill="none" stroke="#B7FF00" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="84" r="4" fill="#fff" />
      </svg>
    </div>
  );
}
