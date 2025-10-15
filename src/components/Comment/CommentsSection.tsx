'use client';

import { CommentsSectionProps } from '@/types/comment';
import { CommentCard } from './CommentCard';
import { CommentInput } from './CommentInput';
import { useState } from 'react';

export const CommentsSection: React.FC<CommentsSectionProps> = ({
  comments: initialComments,
}) => {
  const [comments, setComments] = useState(initialComments);

  const handleAddComment = (content: string) => {
    console.log('Submitting comment:', content);
    if (content.trim()) {
      const newComment = {
        id: Date.now().toString(),
        author: 'You',
        avatar: 'https://i.pravatar.cc/150?img=7',
        date: new Date().toLocaleDateString(),
        content,
      };
      setComments(oldComments => [...oldComments, newComment]);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <div className=" overflow-hidden">
        <div className="p-4 ">
          <h3 className="text-lg font-semibold text-gray-900">Comments</h3>
        </div>

        <div className="divide-y divide-gray-100">
          {comments.map(comment => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>

        <CommentInput onSubmit={handleAddComment} />
      </div>
    </div>
  );
};
