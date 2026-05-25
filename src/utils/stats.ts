import type { Run } from "../types/run";
import { durationToSeconds, formatDuration } from "./format";

export function getWeeklyStats(runs: Run[]) {
  const distance = runs.reduce((sum, run) => sum + run.distance, 0);
  const totalSeconds = runs.reduce((sum, run) => sum + durationToSeconds(run.duration), 0);
  const longest = runs.reduce((max, run) => Math.max(max, run.distance), 0);
  const avgPaceSeconds = totalSeconds / Math.max(distance, 1);
  const paceMinutes = Math.floor(avgPaceSeconds / 60);
  const paceSeconds = Math.round(avgPaceSeconds % 60)
    .toString()
    .padStart(2, "0");

  return {
    distance: distance.toFixed(1),
    runs: runs.length,
    duration: formatDuration(totalSeconds),
    avgPace: `${paceMinutes}:${paceSeconds}`,
    longest: longest.toFixed(1)
  };
}

export function getChartData(runs: Run[]) {
  return runs.map((run) => ({
    date: new Intl.DateTimeFormat("ru-RU", { weekday: "short" }).format(new Date(run.date)),
    distance: run.distance,
    pace: Number(run.pace.replace(":", "."))
  }));
}
