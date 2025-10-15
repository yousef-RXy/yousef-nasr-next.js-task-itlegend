'use client';

import { useState } from 'react';
import { SubmitButton } from './SubmitButton';

interface CommentInputProps {
  onSubmit: (content: string) => void;
}

export const CommentInput: React.FC<CommentInputProps> = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <>
      <div className="p-4  bg-gray-200/20 rounded-2xl">
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Write a comment"
          className="w-full bg-white shadow-lg px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
          rows={3}
        />
      </div>
      <div className="px-4 pb-4">
        <SubmitButton onClick={handleSubmit} />
      </div>
    </>
  );
};
