import { QuizContentWrapperProps } from '@/types/quiz';
import { useQuiz } from './QuizContext';
import { useEffect } from 'react';
import QuizContent from './QuizContent';
import ResultsContent from './ResultsContent';

const QuizContentWrapper: React.FC<QuizContentWrapperProps> = ({
  isOpen,
  onClose,
}) => {
  const { quizProgress, setQuizProgress, quizData, QUIZ_TIME_LIMIT } =
    useQuiz();

  useEffect(() => {
    if (!isOpen || quizProgress.completed || quizProgress.timeRemaining <= 0)
      return;

    const timer = setInterval(() => {
      setQuizProgress(prev => {
        const elapsed = Math.floor((Date.now() - prev.startTime) / 1000);
        const newTimeRemaining = Math.max(0, QUIZ_TIME_LIMIT - elapsed);

        if (newTimeRemaining === 0) {
          const score =
            prev.answers.reduce((acc, answer, index) => {
              if (acc === null) return 0;
              return acc + (answer === quizData[index].correctAnswer ? 1 : 0);
            }, 0) ?? 0;

          return { ...prev, timeRemaining: 0, completed: true, score };
        }

        return { ...prev, timeRemaining: newTimeRemaining };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [
    isOpen,
    quizProgress.completed,
    quizProgress.timeRemaining,
    setQuizProgress,
    quizData,
    QUIZ_TIME_LIMIT,
  ]);

  const handleAnswerSelect = (answerIndex: number): void => {
    const newAnswers = [...quizProgress.answers];
    newAnswers[quizProgress.currentQuestion] = answerIndex;
    setQuizProgress({ ...quizProgress, answers: newAnswers });
  };

  const handleNext = (): void => {
    if (quizProgress.currentQuestion < quizData.length - 1) {
      setQuizProgress({
        ...quizProgress,
        currentQuestion: quizProgress.currentQuestion + 1,
      });
    }
  };

  const handlePrevious = (): void => {
    if (quizProgress.currentQuestion > 0) {
      setQuizProgress({
        ...quizProgress,
        currentQuestion: quizProgress.currentQuestion - 1,
      });
    }
  };

  const handleSubmit = (): void => {
    const score =
      quizProgress.answers.reduce((acc, answer, index) => {
        if (acc === null) return 0;
        return acc + (answer === quizData[index].correctAnswer ? 1 : 0);
      }, 0) ?? 0;
    setQuizProgress({ ...quizProgress, completed: true, score });
  };

  const handleRestart = (): void => {
    setQuizProgress({
      currentQuestion: 0,
      answers: Array(quizData.length).fill(null),
      completed: false,
      score: 0,
      timeRemaining: QUIZ_TIME_LIMIT,
      startTime: Date.now(),
    });
  };

  return (
    <>
      {!quizProgress.completed ? (
        <QuizContent
          quizProgress={quizProgress}
          onAnswerSelect={handleAnswerSelect}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onSubmit={handleSubmit}
        />
      ) : (
        <ResultsContent
          quizProgress={quizProgress}
          onRestart={handleRestart}
          onClose={onClose}
        />
      )}
    </>
  );
};
export default QuizContentWrapper;
