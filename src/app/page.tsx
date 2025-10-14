import CourseInfo from '@/components/sections/CourseInfo';
import ProgressBar from '@/components/ui/ProgressBar';

export default function Home() {
  return (
    <>
      <CourseInfo />
      <section className="min-h-screen flex flex-col justify-center items-center text-white p-10">
        <h2 className="text-3xl font-bold mb-10">My Skills</h2>
        <ProgressBar label="React" percentage={90} />
        <ProgressBar label="Next.js" percentage={80} />
        <ProgressBar label="Node.js" percentage={70} />
        <ProgressBar label="Tailwind CSS" percentage={85} />
      </section>
    </>
  );
}
