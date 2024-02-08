import { useCallback, useEffect, useRef, useState } from "react";

const TOTAL_SECONDS = 86400; // 1 day

const useTimer = (msTick: number, cb: Function) => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(TOTAL_SECONDS);

  const timerRef = useRef<any>(null);

  const start = useCallback(() => {
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setSeconds((state) => state - 1);
      cb();
    }, msTick);
  }, [setIsRunning]);

  const stop = useCallback(() => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setSeconds(TOTAL_SECONDS);
  }, [setIsRunning, setSeconds, TOTAL_SECONDS]);

  useEffect(() => {
    if (seconds < 1) {
      stop();
    }
  }, [seconds, stop]);

  useEffect(() => {
    start();
    return () => timerRef && clearInterval(timerRef.current);
  }, []);

  return {
    isRunning,
    start,
    stop,
    seconds,
  };
};

export default useTimer;

///////////
