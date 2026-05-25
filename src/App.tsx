import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AppLayout } from "./layouts/AppLayout";
import { Dashboard } from "./pages/Dashboard";
import { RunsPage } from "./pages/RunsPage";
import { RunDetailsPage } from "./pages/RunDetailsPage";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import { useRuns } from "./hooks/useRuns";
import type { Page } from "./types/page";
import type { Run } from "./types/run";

export default function App() {
  const { runs } = useRuns();
  const [activePage, setActivePage] = useState<Page>("dashboard");
  const [selectedRunId, setSelectedRunId] = useState<number | null>(null);

  const selectedRun = useMemo(
    () => runs.find((run) => run.id === selectedRunId) ?? null,
    [runs, selectedRunId]
  );

  function openRun(run: Run) {
    setSelectedRunId(run.id);
  }

  function changePage(page: Page) {
    setSelectedRunId(null);
    setActivePage(page);
  }

  let content;
  if (selectedRun) {
    content = <RunDetailsPage run={selectedRun} onBack={() => setSelectedRunId(null)} />;
  } else if (activePage === "runs") {
    content = <RunsPage runs={runs} onOpenRun={openRun} />;
  } else if (activePage === "progress") {
    content = (
      <PlaceholderPage
        title="Прогресс"
        description="Здесь подготовлено место для целей, месячных циклов и AI coaching. Текущие графики уже доступны на главном экране."
      />
    );
  } else if (activePage === "routes") {
    content = (
      <PlaceholderPage
        title="Маршруты"
        description="Маршруты Челябинска и Каменска-Уральского сохраняются в данных пробежек и открываются на странице деталей."
      />
    );
  } else if (activePage === "goals") {
    content = (
      <PlaceholderPage
        title="Цели"
        description="Архитектура готова к недельным целям, push notifications и синхронизации с Garmin или Apple Health."
      />
    );
  } else {
    content = <Dashboard runs={runs} onOpenRun={openRun} />;
  }

  return (
    <AppLayout activePage={activePage} onChangePage={changePage}>
      <AnimatePresence mode="wait">{content}</AnimatePresence>
    </AppLayout>
  );
}
