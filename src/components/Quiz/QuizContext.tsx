import { QuizContextType, QuizProgress, QuizQuestion } from '@/types/quiz';
import React, { createContext, useContext, useState, ReactNode } from 'react';

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within QuizProvider');
  }
  return context;
};

interface QuizProviderProps {
  children: ReactNode;
  quizData: QuizQuestion[];
  timeLimit: number;
}

export const QuizProvider: React.FC<QuizProviderProps> = ({
  children,
  quizData,
  timeLimit,
}) => {
  const [quizProgress, setQuizProgress] = useState<QuizProgress>({
    currentQuestion: 0,
    answers: Array(quizData.length).fill(null),
    completed: false,
    score: 0,
    timeRemaining: timeLimit,
    startTime: Date.now(),
  });

  return (
    <QuizContext.Provider
      value={{
        quizProgress,
        setQuizProgress,
        quizData,
        QUIZ_TIME_LIMIT: timeLimit,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
