import { motion } from 'framer-motion';
import { ResultsActionsProps } from '@/types/quiz';

const ResultsActions: React.FC<ResultsActionsProps> = ({
  onRestart,
  onClose,
}) => {
  return (
    <div className="flex gap-4 pt-6">
      <motion.button
        onClick={onRestart}
        className="flex-1 px-6 py-3 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Retake Quiz
      </motion.button>
      <motion.button
        onClick={onClose}
        className="flex-1 px-6 py-3 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Close
      </motion.button>
    </div>
  );
};
export default ResultsActions;
