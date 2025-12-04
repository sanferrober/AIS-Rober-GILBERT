
import { useState, useEffect } from 'react';

export const useCurrentTime = (updateInterval = 60000): Date => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, updateInterval);

    return () => clearInterval(intervalId);
  }, [updateInterval]);

  return currentTime;
};
