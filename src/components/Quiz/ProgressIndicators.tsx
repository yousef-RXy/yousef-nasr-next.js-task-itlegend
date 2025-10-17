import { ProgressIndicatorsProps } from '@/types/quiz';

const ProgressIndicators: React.FC<ProgressIndicatorsProps> = ({
  quizData,
  currentQuestion,
  answers,
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex gap-2">
        {quizData.map((_, idx) => (
          <div
            key={idx}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
              idx === currentQuestion
                ? 'bg-indigo-600 text-white'
                : answers[idx] !== null
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {idx + 1}
          </div>
        ))}
      </div>
      <div className="text-sm font-medium text-gray-600">
        {answers.filter(a => a !== null).length} / {quizData.length} answered
      </div>
    </div>
  );
};
export default ProgressIndicators;
