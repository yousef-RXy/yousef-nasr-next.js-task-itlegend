import { CourseItemProps } from '@/types/course';
import { IoLockClosed, IoDocumentText } from 'react-icons/io5';
import { Badge } from './Badge';
import Quiz from '@/components/Quiz/Quiz';
import { useState } from 'react';
import { QuizQuestion } from '@/types/quiz';
import Popup from '../ui/Popup';

export const CourseItem: React.FC<CourseItemProps> = ({
  title,
  isLocked,
  badges,
}) => {
  const [isOpenQuiz, setIsOpenQuiz] = useState<boolean>(false);
  const [isOpenPDF, setIsOpenPDF] = useState<boolean>(false);

  const quizData: QuizQuestion[] = [
    {
      id: 1,
      question:
        'Among the following editors of India, which one has the status and powers of Supreme Court Judge?',
      options: [
        'Election Commissioner',
        'Comptroller and Auditor General',
        'Chief Election Commissioner',
        'Attorney General',
      ],
      correctAnswer: 2,
    },
    {
      id: 2,
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correctAnswer: 2,
    },
    {
      id: 3,
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 1,
    },
    {
      id: 4,
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        'Charles Dickens',
        'William Shakespeare',
        'Jane Austen',
        'Mark Twain',
      ],
      correctAnswer: 1,
    },
    {
      id: 5,
      question: 'What is the largest ocean on Earth?',
      options: [
        'Atlantic Ocean',
        'Indian Ocean',
        'Arctic Ocean',
        'Pacific Ocean',
      ],
      correctAnswer: 3,
    },
  ];

  const QUIZ_TIME_LIMIT = 300;

  return (
    <div
      className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors cursor-pointer"
      onClick={() => (isLocked ? setIsOpenPDF(true) : setIsOpenQuiz(true))}
    >
      <div className="flex items-center gap-3">
        <IoDocumentText className="text-gray-400 text-base" />
        <span className="text-gray-700 text-sm">{title}</span>
      </div>
      <div className="flex items-center justify-end gap-2 flex-wrap">
        {badges &&
          badges.map((badge, index) => (
            <Badge key={index} variant={badge.variant}>
              {badge.text}
            </Badge>
          ))}
        {isLocked && <IoLockClosed className="w-4 h-4 text-gray-400" />}
      </div>
      <Quiz
        isOpen={isOpenQuiz}
        onClose={() => setIsOpenQuiz(false)}
        quizData={quizData}
        timeLimit={QUIZ_TIME_LIMIT}
      />
      <Popup
        isOpen={isOpenPDF}
        onClose={() => setIsOpenPDF(false)}
        title={title}
      >
        <div className="w-full h-[calc(90vh-180px)]">
          <iframe
            src="/lec_one.pdf"
            className="w-full h-full border-0 rounded-lg"
            title={title}
          />
        </div>
      </Popup>
    </div>
  );
};
