'use client';

import { Comment } from '@/types/comment';
import { CommentCard } from './CommentCard';
import { CommentInput } from './CommentInput';
import { useState } from 'react';

export const CommentsSection: React.FC = () => {
  const sampleComments: Comment[] = [
    {
      id: '1',
      author: 'Student Name Goes Here',
      avatar: 'https://i.pravatar.cc/150?img=1',
      date: 'Oct 19, 2021',
      content:
        'Lorem ipsum dolor sit ormet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: '2',
      author: 'Student Name Goes Here',
      avatar: 'https://i.pravatar.cc/150?img=2',
      date: 'Oct 19, 2021',
      content:
        'Lorem ipsum dolor sit ormet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const [comments, setComments] = useState(sampleComments);

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
    <div className="mx-auto">
      <div className=" overflow-hidden">
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
