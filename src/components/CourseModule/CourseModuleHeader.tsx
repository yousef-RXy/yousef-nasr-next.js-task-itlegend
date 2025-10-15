import { CourseHeaderProps } from '@/types/course';
import { IoAdd, IoRemove } from 'react-icons/io5';

export const CourseModuleHeader: React.FC<CourseHeaderProps> = ({
  week,
  title,
  subtitle,
  isExpanded,
  onToggle,
}) => {
  return (
    <div
      className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={onToggle}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">{week}</h3>
          <p className="text-xs text-gray-500">{title}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
        <button className="ml-4 p-1 hover:bg-gray-100 rounded transition-colors">
          {isExpanded ? (
            <IoRemove className="w-4 h-4 text-gray-600" />
          ) : (
            <IoAdd className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );
};
