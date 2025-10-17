import { QuizContentProps } from '@/types/quiz';
import AnswerOptions from './AnswerOptions';
import NavigationButtons from './NavigationButtons';
import ProgressIndicators from './ProgressIndicators';
import QuestionDisplay from './QuestionDisplay';
import Timer from './Timer';
import { useQuiz } from './QuizContext';

const QuizContent: React.FC<QuizContentProps> = ({
  quizProgress,
  onAnswerSelect,
  onNext,
  onPrevious,
  onSubmit,
}) => {
  const { quizData, QUIZ_TIME_LIMIT } = useQuiz();

  const currentQ = quizData[quizProgress.currentQuestion];
  const selectedAnswer = quizProgress.answers[quizProgress.currentQuestion];
  const allAnswered = quizProgress.answers.every(a => a !== null);

  return (
    <div className="space-y-6">
      <Timer
        timeRemaining={quizProgress.timeRemaining}
        timeLimit={QUIZ_TIME_LIMIT}
      />

      <ProgressIndicators
        quizData={quizData}
        currentQuestion={quizProgress.currentQuestion}
        answers={quizProgress.answers}
      />

      <QuestionDisplay
        question={currentQ.question}
        currentIndex={quizProgress.currentQuestion}
        totalQuestions={quizData.length}
      />

      <AnswerOptions
        options={currentQ.options}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={onAnswerSelect}
      />

      <NavigationButtons
        currentQuestion={quizProgress.currentQuestion}
        totalQuestions={quizData.length}
        allAnswered={allAnswered}
        onPrevious={onPrevious}
        onNext={onNext}
        onSubmit={onSubmit}
      />
    </div>
  );
};
export default QuizContent;
