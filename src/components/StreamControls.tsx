import { memo } from 'react';

interface StreamControlsProps {
  isRunning: boolean;
  onToggle: () => void;
}

export const StreamControls = memo(({ isRunning, onToggle }: StreamControlsProps) => {
  return (
    <button
      onClick={onToggle}
      className={`px-4 py-2 rounded font-medium text-sm transition-colors ${
        isRunning
          ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
          : 'bg-gray-600 text-white hover:bg-gray-500'
      }`}
    >
      {isRunning ? 'Stop' : 'Start'}
    </button>
  );
});
