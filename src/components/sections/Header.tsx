'use client';

import { motion } from 'framer-motion';
import CourseHeader from '@/components/ui/CourseHeader';
import Breadcrumb from '@/components/ui/Breadcrumb';

function Header() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'Course Details' },
  ];

  const courseTitle = 'Starting SEO as your Home Based Business';

  return (
    <motion.div
      className="max-w-7xl mx-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Breadcrumb items={breadcrumbItems} />
      <CourseHeader title={courseTitle} />
    </motion.div>
  );
}

export default Header;
