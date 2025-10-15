import { IoArrowForward } from 'react-icons/io5';

interface SubmitButtonProps {
  onClick: () => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
    >
      Submit Review
      <IoArrowForward className="w-4 h-4" />
    </button>
  );
};
