import { useEffect, useMemo, useState } from "react";
import { seedRuns } from "../data/runs";
import type { Run } from "../types/run";

const STORAGE_KEY = "bystree-vetra-runs";

export function useRuns() {
  const [runs, setRuns] = useState<Run[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? (JSON.parse(saved) as Run[]) : seedRuns;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(runs));
  }, [runs]);

  const sortedRuns = useMemo(
    () => [...runs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [runs]
  );

  return { runs: sortedRuns, setRuns };
}
