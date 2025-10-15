import { CourseItemProps } from '@/types/course';
import { IoLockClosed, IoDocumentText } from 'react-icons/io5';
import { Badge } from './Badge';

export const CourseItem: React.FC<CourseItemProps> = ({
  title,
  isLocked,
  badges,
}) => {
  return (
    <div className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors cursor-pointer">
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
    </div>
  );
};
