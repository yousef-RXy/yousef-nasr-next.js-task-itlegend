import { Comment } from '@/types/comment';

interface CommentCardProps {
  comment: Comment;
}

export const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return (
    <div className="flex gap-3 p-4">
      <img
        src={comment.avatar}
        alt={comment.author}
        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-sm font-semibold text-gray-900">
            {comment.author}
          </h4>
          <span className="text-xs text-gray-500">{comment.date}</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {comment.content}
        </p>
      </div>
    </div>
  );
};
