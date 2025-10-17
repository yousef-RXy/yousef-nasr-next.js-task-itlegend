import { ResultsContentProps } from '@/types/quiz';
import ResultsDisplay from './ResultsDisplay';
import AnswerReview from './AnswerReview';
import ResultsActions from './ResultsActions';
import { useQuiz } from './QuizContext';

const ResultsContent: React.FC<ResultsContentProps> = ({
  quizProgress,
  onRestart,
  onClose,
}) => {
  const { quizData } = useQuiz();

  return (
    <div className="space-y-6">
      <ResultsDisplay
        score={quizProgress.score}
        totalQuestions={quizData.length}
      />
      <AnswerReview quizData={quizData} answers={quizProgress.answers} />
      <ResultsActions onRestart={onRestart} onClose={onClose} />
    </div>
  );
};
export default ResultsContent;
