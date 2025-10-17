import { AnswerOptionsProps } from '@/types/quiz';
import { motion } from 'framer-motion';

const AnswerOptions: React.FC<AnswerOptionsProps> = ({
  options,
  selectedAnswer,
  onAnswerSelect,
}) => {
  return (
    <div className="space-y-3">
      {options.map((option, idx) => (
        <motion.button
          key={idx}
          onClick={() => onAnswerSelect(idx)}
          className={`w-full p-4 rounded-lg text-left font-medium transition-all ${
            selectedAnswer === idx
              ? 'bg-indigo-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3 text-sm">
              {String.fromCharCode(65 + idx)}
            </span>
            {option}
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default AnswerOptions;
