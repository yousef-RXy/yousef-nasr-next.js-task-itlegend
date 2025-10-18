'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import Popup from '@/components/ui/Popup';
import { Question, QuestionProviderProps } from '@/types/question';
import { QuestionContext } from './QuestionContext';
import QuestionPopupContent from './QuestionPopupContent';

const QuestionProvider: React.FC<QuestionProviderProps> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState('');
  const [draft, setDraft] = useState('');

  const addQuestion = (question: string, componentSource: string) => {
    const newQuestion: Question = {
      id: `q-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      question,
      timestamp: Date.now(),
      componentSource,
    };

    setQuestions(prev => [...prev, newQuestion]);
    setIsPopupOpen(false);

    toast.success('Question submitted successfully!', {
      description: 'Your question has been saved.',
    });
  };

  const openQuestionPopup = () => {
    setIsPopupOpen(true);
  };

  const handleSubmitQuestion = (question: string) => {
    addQuestion(question, currentComponent);
  };

  return (
    <QuestionContext.Provider
      value={{ questions, addQuestion, openQuestionPopup, draft, setDraft }}
    >
      {children}
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title="Have a Question?"
      >
        <QuestionPopupContent
          onSubmit={handleSubmitQuestion}
          onCancel={() => setIsPopupOpen(false)}
        />
      </Popup>
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
