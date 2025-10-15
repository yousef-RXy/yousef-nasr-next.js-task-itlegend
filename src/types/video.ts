export interface CoursePlayerProps {
  courseTitle: string;
  videoUrl: string;
}

export interface VideoControlsProps {
  isPlaying: boolean;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  onPlayPause: () => void;
  onMuteToggle: () => void;
  onSeek: (time: number) => void;
  onFullscreen: () => void;
}
