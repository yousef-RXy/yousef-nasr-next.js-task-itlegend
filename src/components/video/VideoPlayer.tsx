'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoPause, IoPlay } from 'react-icons/io5';
import VideoControls from '@/components/video/VideoControls';

interface VideoPlayerProps {
  isTheaterMode?: boolean;
  onTheaterToggle?: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  isTheaterMode,
  onTheaterToggle,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const hideControlsTimeoutRef = useRef<NodeJS.Timeout>(null);

  const videoUrl =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);

    const updateDuration = () => {
      if (
        video.duration &&
        !isNaN(video.duration) &&
        isFinite(video.duration)
      ) {
        setDuration(video.duration);
      }
    };

    updateDuration();

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('durationchange', updateDuration);
    video.addEventListener('loadeddata', updateDuration);
    video.addEventListener('canplay', updateDuration);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('durationchange', updateDuration);
      video.removeEventListener('loadeddata', updateDuration);
      video.removeEventListener('canplay', updateDuration);
    };
  }, []);

  const handleMouseMove = () => {
    setShowControls(true);

    if (hideControlsTimeoutRef.current) {
      clearTimeout(hideControlsTimeoutRef.current);
    }

    if (isPlaying) {
      hideControlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    setIsPlaying(oldState => !oldState);
    setShowControls(true);
    if (hideControlsTimeoutRef.current) {
      clearTimeout(hideControlsTimeoutRef.current);
    }

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
      hideControlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(oldState => !oldState);
  };

  const handleSeek = (time: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = time;
    setCurrentTime(time);
  };

  const toggleFullscreen = async () => {
    const player = playerRef.current;
    if (!player) return;

    try {
      if (!document.fullscreenElement) {
        await player.requestFullscreen();

        if (
          typeof window !== 'undefined' &&
          'orientation' in screen &&
          screen.orientation
        ) {
          try {
            const orientation = screen.orientation as ScreenOrientation & {
              lock?: (orientation: OrientationLockType) => Promise<void>;
            };

            if (orientation.lock) {
              await orientation.lock('landscape' as OrientationLockType);
            }
          } catch (err) {
            console.warn('Orientation lock not supported or blocked:', err);
          }
        }
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error('Fullscreen error:', err);
    }
  };

  return (
    <>
      <motion.div
        ref={playerRef}
        className="relative bg-black rounded-lg overflow-hidden shadow-2xl"
        style={{ aspectRatio: '16/9', maxHeight: '67vh', width: '100%' }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isPlaying && setShowControls(false)}
        onTouchStart={handleMouseMove}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          src={videoUrl}
          onClick={togglePlay}
        />
        <AnimatePresence>
          {showControls && (
            <motion.button
              onClick={togglePlay}
              className="absolute flex justify-center items-center w-6 h-6 lg:w-20 lg:h-20 p-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full hover:scale-110 transition-transform opacity-80 hover:opacity-100"
              aria-label={isPlaying ? 'Pause' : 'Play'}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.8, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <AnimatePresence mode="wait">
                {isPlaying ? (
                  <motion.div
                    key="pause-overlay"
                    initial={{ opacity: 0, rotate: 180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IoPause className="w-6 h-6 lg:w-12 lg:h-12 text-gray-800" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="play-overlay"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-center items-center"
                  >
                    <IoPlay className="w-6 h-6 lg:w-12 lg:h-12 text-[#df4a58] translate-x-0.5 lg:translate-x-1" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isPlaying && showControls && (
            <VideoControls
              isPlaying={isPlaying}
              isMuted={isMuted}
              currentTime={currentTime}
              duration={duration}
              onPlayPause={togglePlay}
              onMuteToggle={toggleMute}
              onSeek={handleSeek}
              onFullscreen={toggleFullscreen}
              isTheaterMode={isTheaterMode}
              onTheaterToggle={onTheaterToggle}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default VideoPlayer;
