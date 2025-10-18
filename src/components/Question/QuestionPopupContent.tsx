'use client';

import { QuestionPopupContentProps } from '@/types/question';
import { motion } from 'framer-motion';
import { HiQuestionMarkCircle } from 'react-icons/hi2';
import { toast } from 'sonner';
import { useQuestions } from './QuestionContext';

const QuestionPopupContent: React.FC<QuestionPopupContentProps> = ({
  onSubmit,
  onCancel,
}) => {
  const { draft, setDraft } = useQuestions();

  const handleSubmit = () => {
    if (draft.trim()) {
      onSubmit(draft.trim());
      setDraft('');
    } else {
      toast.error('Please enter a question');
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
          <HiQuestionMarkCircle className="w-12 h-12 text-blue-600" />
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Have a Question?
        </h3>
        {draft && (
          <p className="text-sm text-blue-600">Draft saved automatically</p>
        )}
      </div>

      <div>
        <label
          htmlFor="question"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Your Question:
        </label>
        <textarea
          id="question"
          value={draft}
          onChange={e => setDraft(e.target.value)}
          placeholder="Type your question?"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none min-h-[120px]"
          onKeyDown={e => {
            if (e.key === 'Enter' && e.ctrlKey) {
              handleSubmit();
            }
          }}
        />
        <p className="text-xs text-gray-500 mt-1">Press Ctrl+Enter to submit</p>
      </div>

      <div className="flex gap-3">
        <motion.button
          onClick={handleCancel}
          className="flex-1 px-6 py-3 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Cancel
        </motion.button>
        <motion.button
          onClick={handleSubmit}
          className="flex-1 px-6 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Submit Question
        </motion.button>
      </div>
    </div>
  );
};

export default QuestionPopupContent;
