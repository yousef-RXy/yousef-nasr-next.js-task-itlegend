import { motion } from 'framer-motion';

interface CourseHeaderProps {
  title: string;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({ title }) => {
  return (
    <motion.h1
      className="text-3xl font-bold mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      {title}
    </motion.h1>
  );
};

export default CourseHeader;
