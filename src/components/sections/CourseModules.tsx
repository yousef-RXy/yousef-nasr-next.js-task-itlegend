import { CourseModule } from '@/components/CourseModule/CourseModule';
import { CourseItemProps } from '@/types/course';

export default function CourseModules() {
  const courseItems1: CourseItemProps[] = [
    { title: 'Introduction', isLocked: true },
    { title: 'Course Overview', isLocked: true },
    {
      title: 'Course Overview',
      isLocked: false,
      badges: [
        { text: '0 QUESTION', variant: 'question' },
        { text: '10 MINUTES', variant: 'time' },
      ],
    },
    { title: 'Course Exercise / Reference Files', isLocked: true },
    {
      title: 'Code Editor Installation (Optional if you have one)',
      isLocked: true,
    },
    { title: 'Embedding PHP in HTML', isLocked: true },
  ];

  const courseItems2: CourseItemProps[] = [
    { title: 'Defining Functions', isLocked: true },
    { title: 'Function Parameters', isLocked: true },
    {
      title: 'Return Values From Functions',
      isLocked: false,
      badges: [
        { text: '2 QUESTION', variant: 'question' },
        { text: '15 MINUTES', variant: 'time' },
      ],
    },
    { title: 'Global Variable and Scope', isLocked: true },
    { title: 'Newer Way of creating a Constant', isLocked: true },
    { title: 'Constants', isLocked: true },
  ];

  return (
    <section id="course-modules" className="space-y-4 w-full">
      <CourseModule
        week="Week 1-4"
        title="Advanced story telling techniques for writers:"
        subtitle="Personas, Characters & Plots"
        courseItems={courseItems1}
        defaultExpanded={true}
      />
      <CourseModule
        week="Week 5-8"
        title="Advanced story telling techniques for writers:"
        subtitle="Personas, Characters & Plots"
        courseItems={courseItems2}
        defaultExpanded={false}
      />
      <CourseModule
        week="Week 5-8"
        title="Advanced story telling techniques for writers:"
        subtitle="Personas, Characters & Plots"
        courseItems={courseItems2}
        defaultExpanded={false}
      />
    </section>
  );
}
