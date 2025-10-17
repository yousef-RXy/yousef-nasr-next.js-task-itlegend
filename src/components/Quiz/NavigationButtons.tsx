import { NavigationButtonsProps } from '@/types/quiz';
import { motion } from 'framer-motion';

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentQuestion,
  totalQuestions,
  allAnswered,
  onPrevious,
  onNext,
  onSubmit,
}) => {
  return (
    <div className="flex justify-between pt-6 border-t">
      <motion.button
        onClick={onPrevious}
        disabled={currentQuestion === 0}
        className="px-6 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
        whileHover={{ scale: currentQuestion === 0 ? 1 : 1.05 }}
        whileTap={{ scale: currentQuestion === 0 ? 1 : 0.95 }}
      >
        Previous
      </motion.button>

      {currentQuestion === totalQuestions - 1 ? (
        <motion.button
          onClick={onSubmit}
          disabled={!allAnswered}
          className="px-8 py-3 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          whileHover={{ scale: allAnswered ? 1.05 : 1 }}
          whileTap={{ scale: allAnswered ? 0.95 : 1 }}
        >
          Submit Quiz
        </motion.button>
      ) : (
        <motion.button
          onClick={onNext}
          className="px-6 py-3 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Next
        </motion.button>
      )}
    </div>
  );
};

export default NavigationButtons;
