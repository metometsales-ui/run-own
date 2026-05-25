import type { Run } from "../types/run";

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "short"
  }).format(new Date(date));
}

export function durationToSeconds(duration: string) {
  const [hours, minutes, seconds] = duration.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

export function formatDuration(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return `${hours}ч ${minutes}м`;
}

export function getRunTypeLabel(type: Run["type"]) {
  const labels: Record<Run["type"], string> = {
    "Easy Run": "Легкая",
    "Tempo Run": "Темповая",
    "Long Run": "Длинная",
    "Recovery Run": "Восстановительная"
  };

  return labels[type];
}
