import { Plus } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingActionButton() {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-[92px] right-5 z-40 grid size-14 place-items-center rounded-2xl bg-wind-lime text-wind-black shadow-premium sm:bottom-8 sm:right-8"
      aria-label="Добавить пробежку"
    >
      <Plus size={24} strokeWidth={2.5} />
    </motion.button>
  );
}
