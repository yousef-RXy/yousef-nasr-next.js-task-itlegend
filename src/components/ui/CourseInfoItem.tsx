import { FaChalkboardTeacher } from 'react-icons/fa';

export default function CourseInfoItem() {
  return (
    <div className="py-5 flex justify-between items-center w-full">
      <div className="flex items-center gap-2">
        <FaChalkboardTeacher />
        <span className="text-sm font-medium text-gray-700">Language:</span>
      </div>
      <span className="text-sm font-medium text-gray-700">John Doe</span>
    </div>
  );
}
