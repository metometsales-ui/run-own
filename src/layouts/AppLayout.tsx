import type { ReactNode } from "react";
import { Header } from "../components/Header";
import { BottomNavigation } from "../components/BottomNavigation";
import { FloatingActionButton } from "../components/FloatingActionButton";
import type { Page } from "../types/page";

export function AppLayout({
  activePage,
  onChangePage,
  children
}: {
  activePage: Page;
  onChangePage: (page: Page) => void;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-wind-fog text-wind-black">
      <div className="mx-auto min-h-screen max-w-6xl px-4 pb-28 sm:px-6 sm:pb-10 lg:px-8">
        <Header />
        <main>{children}</main>
      </div>
      <FloatingActionButton />
      <BottomNavigation activePage={activePage} onChange={onChangePage} />
    </div>
  );
}
