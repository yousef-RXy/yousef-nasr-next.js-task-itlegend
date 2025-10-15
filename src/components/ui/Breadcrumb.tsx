// components/Breadcrumb.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { IoChevronForward } from 'react-icons/io5';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <motion.div
      className="text-sm text-gray-500 mb-4 flex items-center gap-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <motion.a
              href={item.href}
              className="hover:text-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.a>
          ) : (
            <span
              className={
                index === items.length - 1 ? 'text-gray-700 font-medium' : ''
              }
            >
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <IoChevronForward className="text-gray-400" />
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default Breadcrumb;
