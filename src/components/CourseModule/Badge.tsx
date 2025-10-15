import { BadgeProps } from '@/types/course';

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
}) => {
  const variants = {
    default: 'bg-gray-100 text-gray-600',
    question: 'bg-teal-50 text-teal-600',
    time: 'bg-rose-50 text-rose-500',
  };

  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
};
