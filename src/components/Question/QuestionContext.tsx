'use client';

import { QuestionContextType } from '@/types/question';
import { createContext, useContext } from 'react';

export const QuestionContext = createContext<QuestionContextType | undefined>(
  undefined
);

export const useQuestions = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error('useQuestions must be used within QuestionProvider');
  }
  return context;
};
