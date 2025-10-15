import { AnimatePresence } from 'framer-motion';
import {
  IoPlayCircle,
  IoPauseCircle,
  IoVolumeHigh,
  IoVolumeMute,
  IoExpand,
} from 'react-icons/io5';
import { motion } from 'framer-motion';

import { VideoControlsProps } from '@/types/video';

const VideoControls: React.FC<VideoControlsProps> = ({
  isPlaying,
  isMuted,
  currentTime,
  duration,
  onPlayPause,
  onMuteToggle,
  onSeek,
  onFullscreen,
}) => {
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSeek(parseFloat(e.target.value));
  };

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.input
        type="range"
        min="0"
        max={duration || 0}
        value={currentTime}
        onChange={handleSeek}
        className="w-full h-1 mb-3 cursor-pointer appearance-none bg-gray-600 rounded-full"
        style={{
          background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
            (currentTime / duration) * 100
          }%, #4b5563 ${(currentTime / duration) * 100}%, #4b5563 100%)`,
        }}
        whileHover={{ height: '6px' }}
        transition={{ duration: 0.2 }}
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.button
            onClick={onPlayPause}
            className="text-white hover:text-blue-400 transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoPauseCircle className="w-8 h-8" />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoPlayCircle className="w-8 h-8" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button
            onClick={onMuteToggle}
            className="text-white hover:text-blue-400 transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMuted ? (
                <motion.div
                  key="mute"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoVolumeMute className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="unmute"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoVolumeHigh className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.span
            className="text-white text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {formatTime(currentTime)} / {formatTime(duration)}
          </motion.span>
        </div>

        <motion.button
          onClick={onFullscreen}
          className="text-white hover:text-blue-400 transition-colors"
          aria-label="Fullscreen"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <IoExpand className="w-6 h-6" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default VideoControls;
