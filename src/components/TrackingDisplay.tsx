import { memo } from 'react';
import type { StreamData } from '../hooks/useDeepStreamDataMock';

interface TrackingDisplayProps {
  data: StreamData;
}

export const TrackingDisplay = memo(({ data }: TrackingDisplayProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Feed</h2>

      <div className="relative w-full h-96 bg-gray-950 border border-gray-700 rounded overflow-hidden">
        <div
          className="absolute w-16 h-16 border border-amber-500 rounded"
          style={{
            left: `${data.bboxX}px`,
            top: `${data.bboxY}px`,
            boxSizing: 'border-box',
            transition: 'all 0.1s linear',
          }}
        />
      </div>
    </div>
  );
});
