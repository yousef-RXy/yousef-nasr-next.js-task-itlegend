import { QuestionDisplayProps } from '@/types/quiz';

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  currentIndex,
  totalQuestions,
}) => {
  return (
    <div className="bg-indigo-50 p-6 rounded-lg">
      <div className="text-sm font-semibold text-indigo-600 mb-2">
        Question {currentIndex + 1} of {totalQuestions}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{question}</h3>
    </div>
  );
};
export default QuestionDisplay;
