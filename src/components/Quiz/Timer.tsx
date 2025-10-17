import { motion } from 'framer-motion';
import { TimerProps } from '@/types/quiz';

const Timer: React.FC<TimerProps> = ({ timeRemaining, timeLimit }) => {
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const timePercentage = (timeRemaining / timeLimit) * 100;
  const isTimeWarning = timeRemaining <= 60;

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-4 text-white">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">Time Remaining</span>
        <span
          className={`text-2xl font-bold ${
            isTimeWarning ? 'animate-pulse text-red-300' : ''
          }`}
        >
          {formatTime(timeRemaining)}
        </span>
      </div>
      <div className="w-full bg-white/30 rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${
            isTimeWarning ? 'bg-red-400' : 'bg-white'
          }`}
          initial={{ width: '100%' }}
          animate={{ width: `${timePercentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};
export default Timer;
