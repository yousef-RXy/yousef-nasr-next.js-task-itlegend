export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizProgress {
  currentQuestion: number;
  answers: (number | null)[];
  completed: boolean;
  score: number;
  timeRemaining: number;
  startTime: number;
}

export interface TimerProps {
  timeRemaining: number;
  timeLimit: number;
}

export interface ProgressIndicatorsProps {
  quizData: QuizQuestion[];
  currentQuestion: number;
  answers: (number | null)[];
}

export interface QuestionDisplayProps {
  question: string;
  currentIndex: number;
  totalQuestions: number;
}

export interface AnswerOptionsProps {
  options: string[];
  selectedAnswer: number | null;
  onAnswerSelect: (index: number) => void;
}

export interface NavigationButtonsProps {
  currentQuestion: number;
  totalQuestions: number;
  allAnswered: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export interface ResultsDisplayProps {
  score: number;
  totalQuestions: number;
}

export interface AnswerReviewProps {
  quizData: QuizQuestion[];
  answers: (number | null)[];
}

export interface ResultsActionsProps {
  onRestart: () => void;
  onClose: () => void;
}

export interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export interface LandingPageProps {
  onStartQuiz: () => void;
}

export interface QuizContentProps {
  quizProgress: QuizProgress;
  onAnswerSelect: (index: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
}

export interface ResultsContentProps {
  quizProgress: QuizProgress;
  onRestart: () => void;
  onClose: () => void;
}

export interface QuizContextType {
  quizProgress: QuizProgress;
  setQuizProgress: React.Dispatch<React.SetStateAction<QuizProgress>>;
  quizData: QuizQuestion[];
  QUIZ_TIME_LIMIT: number;
}

export interface QuizContentWrapperProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface QuizProps {
  isOpen: boolean;
  onClose: () => void;
  quizData: QuizQuestion[];
  timeLimit: number;
}
