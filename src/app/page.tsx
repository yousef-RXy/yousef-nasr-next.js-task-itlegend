import { CommentsSection } from '@/components/Comment/CommentsSection';
import CourseInfo from '@/components/sections/CourseInfo';
import { Comment } from '@/types/comment';
import VideoPlayer from '@/components/video/VideoPlayer';
import Header from '@/components/sections/Header';

export default function Home() {
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

  const videoUrl =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  return (
    <>
      <Header />
      <VideoPlayer videoUrl={videoUrl} />;{/* <CourseInfo /> */}
      {/* <section className="min-h-screen flex flex-col justify-center items-center text-white p-10">
        <h2 className="text-3xl font-bold mb-10">My Skills</h2>
        <ProgressBar label="React" percentage={90} />
        <ProgressBar label="Next.js" percentage={80} />
        <ProgressBar label="Node.js" percentage={70} />
        <ProgressBar label="Tailwind CSS" percentage={85} />
      </section> */}
      {/* <CommentsSection comments={sampleComments} /> */}
    </>
  );
}
