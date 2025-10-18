import IconButton from '../ui/IconButton';
import { useQuestions } from './QuestionContext';
import { MdOutlineQuestionMark } from 'react-icons/md';

const AskQuestion = () => {
  const { openQuestionPopup } = useQuestions();
  return (
    <IconButton onClick={openQuestionPopup}>
      <MdOutlineQuestionMark className="text-gray-900 lg:text-4xl text-2xl" />
    </IconButton>
  );
};
export default AskQuestion;
