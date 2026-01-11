import { memo } from 'react';
import type { StreamData } from '../hooks/useDeepStreamDataMock';

interface MetadataPanelProps {
  data: StreamData;
  isRunning: boolean;
  tempHistory: number[];
}

export const MetadataPanel = memo(({ data, isRunning }: MetadataPanelProps) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded p-4 space-y-4">
      <h2 className="text-lg font-semibold text-gray-100">Metrics</h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">GPU Temp:</span>
          <span className="font-mono text-gray-100">{data.gpuTemp.toFixed(1)}°C</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Pipeline FPS:</span>
          <span className="font-mono text-gray-100">{data.pipelineFPS}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Objects:</span>
          <span className="font-mono text-gray-100">{data.objectCount}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Tracking ID:</span>
          <span className="font-mono text-gray-100">{data.trackingId}</span>
        </div>
      </div>

      <div className="pt-2 border-t border-gray-700">
        <div className="text-xs text-gray-500">
          {isRunning ? 'Running' : 'Stopped'}
        </div>
      </div>
    </div>
  );
});
