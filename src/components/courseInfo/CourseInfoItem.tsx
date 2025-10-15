import { CourseInfoItemProps } from '@/types/courseInfo';

const CourseInfoItem: React.FC<CourseInfoItemProps> = function ({
  icon,
  title,
  value,
}) {
  return (
    <div className="py-5 flex justify-between items-center w-full">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-lg font-medium text-gray-700">{title}:</span>
      </div>
      <span className="text-lg font-medium text-gray-700">{value}</span>
    </div>
  );
};

export default CourseInfoItem;
