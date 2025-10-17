import { motion } from 'framer-motion';
import { ResultsDisplayProps } from '@/types/quiz';

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  score,
  totalQuestions,
}) => {
  return (
    <div className="text-center py-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="inline-block"
      >
        <div
          className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 ${
            score / totalQuestions >= 0.7 ? 'bg-green-100' : 'bg-yellow-100'
          }`}
        >
          <span
            className={`text-5xl font-bold ${
              score / totalQuestions >= 0.7
                ? 'text-green-600'
                : 'text-yellow-600'
            }`}
          >
            {score}/{totalQuestions}
          </span>
        </div>
      </motion.div>

      <h3 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h3>
      <p className="text-gray-600 text-lg">
        You scored {Math.round((score / totalQuestions) * 100)}%
      </p>
    </div>
  );
};

export default ResultsDisplay;
