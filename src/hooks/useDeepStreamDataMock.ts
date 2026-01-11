import { useEffect, useRef, useState } from 'react';

export interface StreamData {
  objectCount: number;
  trackingId: string;
  bboxX: number;
  bboxY: number;
  gpuTemp: number;
  pipelineFPS: number;
}

export const useDeepStreamDataMock = () => {
  const [data, setData] = useState<StreamData>({
    objectCount: 0,
    trackingId: 'TRACK-A1',
    bboxX: 250,
    bboxY: 250,
    gpuTemp: 65.5,
    pipelineFPS: 120.5,
  });

  const [isRunning, setIsRunning] = useState(true);
  const [tempHistory, setTempHistory] = useState<number[]>([65.5]);

  const vel = useRef({ x: 2, y: 2 });
  const lastUpdate = useRef(Date.now());
  const raf = useRef<number | undefined>(undefined);

  const tick = () => {
    const now = Date.now();
    if (now - lastUpdate.current < 100) {
      raf.current = requestAnimationFrame(tick);
      return;
    }
    lastUpdate.current = now;

    setData(prev => {
      let x = prev.bboxX + vel.current.x;
      let y = prev.bboxY + vel.current.y;

      if (x <= 50 || x >= 450) {
        vel.current.x *= -1;
        x = Math.max(50, Math.min(450, x));
      }

      if (y <= 50 || y >= 450) {
        vel.current.y *= -1;
        y = Math.max(50, Math.min(450, y));
      }

      vel.current.x += (Math.random() - 0.5) * 0.1;
      vel.current.y += (Math.random() - 0.5) * 0.1;

      const temp = Number((65 + Math.random() * 10).toFixed(1));

      setTempHistory(prev => {
        if (prev.length >= 30) {
          return [...prev.slice(1), temp];
        }
        return [...prev, temp];
      });

      return {
        ...prev,
        objectCount: Math.floor(Math.random() * 6),
        bboxX: x,
        bboxY: y,
        gpuTemp: temp,
      };
    });

    raf.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    if (!isRunning) {
      if (raf.current) cancelAnimationFrame(raf.current);
      return;
    }

    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [isRunning]);

  return {
    data,
    isRunning,
    toggleStream: () => setIsRunning(prev => !prev),
    tempHistory,
  };
};
