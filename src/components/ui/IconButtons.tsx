import AskQuestion from '@/components/Question/AskQuestion';
import QuestionProvider from '@/components/Question/QuestionProvider';
import Leaderboard from '@/components/Leaderboard/Leaderboard';
import IconButton from '@/components/ui/IconButton';
import { MdOutlineModeComment } from 'react-icons/md';
import { MdOutlineLibraryBooks } from 'react-icons/md';

function IconButtons() {
  return (
    <div className="flex w-full justify-center lg:justify-start px-5 items-center gap-3 my-5">
      <QuestionProvider>
        <AskQuestion />
      </QuestionProvider>
      <Leaderboard />
      <IconButton href="#course-modules">
        <MdOutlineLibraryBooks className="text-gray-900 lg:text-4xl text-2xl" />
      </IconButton>
      <IconButton href="#comment">
        <MdOutlineModeComment className="text-gray-900 lg:text-4xl text-2xl" />
      </IconButton>
    </div>
  );
}

export default IconButtons;
