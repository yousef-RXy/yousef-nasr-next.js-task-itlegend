'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  percentage: number;
  label?: string;
}

export default function ProgressBar({ percentage, label }: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, percentage));

  return (
    <div className="w-full px-2 mx-auto my-8 relative">
      {label && (
        <p className="mb-2 text-sm font-medium text-gray-300">{label}</p>
      )}

      <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="h-full bg-green-500 rounded-full"
        />
      </div>

      <motion.div
        initial={{ left: '0%', opacity: 0 }}
        whileInView={{ left: `${pct - 1}%`, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        style={{ translate: '-50% 0' }}
        className="absolute top-[-30px] left-0 flex flex-col items-center"
      >
        <div className="relative flex flex-col items-center">
          <div className="bg-white border-2 border-gray-300 text-gray-800 text-[8px] font-semibold rounded-full w-5 h-5 flex items-center justify-center shadow">
            You
          </div>
          <div className="w-0 h-0 border-l-6 border-r-6 border-l-transparent border-r-transparent border-t-8 border-t-gray-300 -mt-[1px]" />
        </div>

        <p className="text-sm text-gray-600 mt-3">{percentage}%</p>
      </motion.div>
    </div>
  );
}
