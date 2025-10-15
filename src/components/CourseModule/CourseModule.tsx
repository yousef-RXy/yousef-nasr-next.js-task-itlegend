'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CourseModuleProps } from '@/types/course';
import { CourseItem } from './CourseItem';
import { CourseModuleHeader } from './CourseModuleHeader';

export const CourseModule: React.FC<CourseModuleProps> = ({
  week,
  title,
  subtitle,
  courseItems,
  defaultExpanded = true,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(oldState => !oldState);
  };
  return (
    <div className="w-full  my-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <CourseModuleHeader
          week={week}
          title={title}
          subtitle={subtitle}
          isExpanded={isExpanded}
          onToggle={toggleExpanded}
        />
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="divide-y divide-gray-100">
                {courseItems.map((item, index) => (
                  <CourseItem
                    key={index}
                    title={item.title}
                    isLocked={item.isLocked}
                    badges={item.badges}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
