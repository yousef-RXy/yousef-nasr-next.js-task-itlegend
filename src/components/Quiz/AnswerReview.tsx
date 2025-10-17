import { AnswerReviewProps } from '@/types/quiz';
import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';

const AnswerReview: React.FC<AnswerReviewProps> = ({ quizData, answers }) => {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-gray-900 text-lg">
        Review Your Answers:
      </h4>
      {quizData.map((q, idx) => {
        const userAnswer = answers[idx];
        const isCorrect = userAnswer === q.correctAnswer;

        return (
          <div
            key={q.id}
            className={`p-4 rounded-lg border-2 ${
              isCorrect
                ? 'border-green-300 bg-green-50'
                : 'border-red-300 bg-red-50'
            }`}
          >
            <div className="flex items-start gap-3">
              {isCorrect ? (
                <IoCheckmarkCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              ) : (
                <IoCloseCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              )}
              <div className="flex-1">
                <p className="font-medium text-gray-900 mb-2">{q.question}</p>
                <p className="text-sm text-gray-600">
                  Your answer:{' '}
                  <span
                    className={
                      isCorrect
                        ? 'text-green-700 font-semibold'
                        : 'text-red-700 font-semibold'
                    }
                  >
                    {q.options[userAnswer!]}
                  </span>
                </p>
                {!isCorrect && (
                  <p className="text-sm text-gray-600 mt-1">
                    Correct answer:{' '}
                    <span className="text-green-700 font-semibold">
                      {q.options[q.correctAnswer]}
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default AnswerReview;
