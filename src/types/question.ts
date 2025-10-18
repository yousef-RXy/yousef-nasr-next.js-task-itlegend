import { ReactNode } from 'react';

export interface Question {
  id: string;
  question: string;
  timestamp: number;
  componentSource: string;
}

export interface QuestionContextType {
  questions: Question[];
  addQuestion: (question: string, componentSource: string) => void;
  openQuestionPopup: () => void;
  draft: string;
  setDraft: (draft: string) => void;
}

export interface QuestionPopupContentProps {
  onSubmit: (question: string) => void;
  onCancel: () => void;
}

export interface QuestionProviderProps {
  children: ReactNode;
}
