import { motion } from "framer-motion";
import { Card } from "../components/ui/card";

export function PlaceholderPage({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <section className="rounded-[28px] bg-wind-black p-6 text-white shadow-premium">
        <p className="text-sm font-semibold text-white/60">Roadmap</p>
        <h2 className="mt-2 text-4xl font-black">{title}</h2>
      </section>
      <Card>
        <p className="text-base font-semibold leading-7 text-wind-muted">{description}</p>
      </Card>
    </motion.div>
  );
}
