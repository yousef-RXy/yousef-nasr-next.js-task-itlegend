import CourseInfoItem from '../ui/CourseInfoItem';

function CourseInfo() {
  return (
    <section
      id="course-info"
      className="flex justify-center items-center w-full"
    >
      <div className="px-9 py-5 bg-white shadow-[0_0_30px_rgba(0,0,0,0.1)] rounded flex flex-col justify-center items-center w-full mx-10">
        <CourseInfoItem />
        <div className="border-t border-gray-300 w-full" />
        <CourseInfoItem />
        <div className="border-t border-gray-300 w-full" />
        <CourseInfoItem />
        <div className="border-t border-gray-300 w-full" />
        <CourseInfoItem />
      </div>
    </section>
  );
}

export default CourseInfo;
