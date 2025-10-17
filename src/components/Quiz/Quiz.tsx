import { QuizProps } from '@/types/quiz';
import Popup from '../ui/Popup';
import QuizContentWrapper from './QuizContentWrapper';
import { QuizProvider } from './QuizContext';

const Quiz: React.FC<QuizProps> = function ({
  isOpen,
  onClose,
  quizData,
  timeLimit,
}) {
  return (
    <QuizProvider quizData={quizData} timeLimit={timeLimit}>
      <Popup isOpen={isOpen} onClose={onClose} title="Quiz">
        <QuizContentWrapper isOpen={isOpen} onClose={onClose} />
      </Popup>
    </QuizProvider>
  );
};
export default Quiz;
