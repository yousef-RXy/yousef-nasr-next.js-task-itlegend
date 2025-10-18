'use client';
import { useState } from 'react';
import Popup from '@/components/ui/Popup';
import LeaderboardContent from '@/components/Leaderboard/LeaderboardContent';
import IconButton from '@/components/ui/IconButton';
import { MdOutlineLeaderboard } from 'react-icons/md';

export default function Leaderboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)}>
        <MdOutlineLeaderboard className="text-gray-900 lg:text-4xl text-2xl" />
      </IconButton>

      <Popup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Leaderboard"
      >
        <LeaderboardContent />
      </Popup>
    </>
  );
}
