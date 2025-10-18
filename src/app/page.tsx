'use client';

import { useState } from 'react';
import { CommentsSection } from '@/components/Comment/CommentsSection';
import { CourseInfo } from '@/components/sections/CourseInfo';
import VideoPlayer from '@/components/video/VideoPlayer';
import Header from '@/components/sections/Header';
import ProgressBar from '@/components/progressBar/ProgressBar';
import CourseModules from '@/components/sections/CourseModules';
import Title from '@/components/ui/Title';
import { Toaster } from 'sonner';
import IconButtons from '@/components/ui/IconButtons';

export default function Home() {
  const [isTheaterMode, setIsTheaterMode] = useState(false);

  return (
    <div className="w-full grid lg:gap-8 lg:gap-x-20 lg:grid-cols-[55%_auto] lg:grid-rows-[auto_auto_auto_auto_1fr]">
      <Toaster position="top-right" richColors />

      <div className="w-full lg:col-span-2 lg:row-start-1">
        <Header />
      </div>

      <div
        className={`w-full lg:relative lg:top-0 sticky top-1 z-50  lg:row-start-2 ${
          isTheaterMode ? 'lg:col-span-2' : 'lg:col-start-1 lg:row-span-2'
        }`}
      >
        <VideoPlayer
          isTheaterMode={isTheaterMode}
          onTheaterToggle={() => setIsTheaterMode(v => !v)}
        />
        <div className="hidden lg:block">
          <IconButtons />
        </div>
      </div>

      <div className="lg:hidden">
        <IconButtons />
      </div>

      <div
        className={`w-full lg:col-start-1  ${
          isTheaterMode ? 'lg:row-start-3 lg:row-span-2' : 'lg:row-start-4'
        }`}
      >
        <Title title="Course Materials" />
        <CourseInfo />
      </div>

      <div
        className={`w-full lg:col-start-2  ${
          isTheaterMode ? 'lg:row-start-3' : 'lg:row-start-2'
        }`}
      >
        <Title title="Topics for This Course" />
        <ProgressBar percentage={63} />
      </div>

      <div
        className={`w-full lg:col-start-2  ${
          isTheaterMode
            ? 'lg:row-start-4 lg:row-span-2'
            : 'lg:row-start-3 lg:row-span-3'
        }`}
      >
        <CourseModules />
      </div>

      <div className="w-full lg:col-start-1 lg:row-start-5">
        <Title title="Comments" />
        <CommentsSection />
      </div>
    </div>
  );
}
