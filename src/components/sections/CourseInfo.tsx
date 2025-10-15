import React from 'react';
import CourseInfoItem from '../courseInfo/CourseInfoItem';
import { CourseInfoItemProps } from '@/types/courseInfo';

import { FaChalkboardTeacher, FaBookReader } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa6';
import { RiBookShelfLine } from 'react-icons/ri';
import { GrLanguage } from 'react-icons/gr';

function CourseInfo() {
  const CourseInfoItems: CourseInfoItemProps[] = [
    {
      icon: <FaChalkboardTeacher />,
      title: 'Instructor',
      value: 'Edward Norton',
    },
    {
      icon: <FaRegClock />,
      title: 'Duration',
      value: '3 weeks',
    },
    {
      icon: <RiBookShelfLine />,
      title: 'Lessons',
      value: '8',
    },
    {
      icon: <FaBookReader />,
      title: 'Enrolled',
      value: '65 students',
    },
    {
      icon: <GrLanguage />,
      title: 'Language',
      value: 'English',
    },
  ];
  return (
    <section
      id="course-info"
      className="flex justify-center items-center w-full mt-4 mb-10"
    >
      <div className="px-9 py-5 bg-white shadow-[0_0_30px_rgba(0,0,0,0.1)] rounded-lg flex flex-col justify-center items-center w-full ">
        {CourseInfoItems.map((item, index) => (
          <React.Fragment key={index}>
            <CourseInfoItem {...item} />
            {index !== CourseInfoItems.length - 1 && (
              <div className="border-t border-gray-300 w-full" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default CourseInfo;
