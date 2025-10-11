import { useEffect } from 'react';
import { useState, useRef } from 'react';

const TimerControls = ({ setTime }) => {
  const clockRef = useRef(null);
  const startButtonRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    startButtonRef.current.focus();
  }, []);

  const toggleClock = () => {
    if (isRunning) {
      clearInterval(clockRef.current);
      clockRef.current = null;
    } else {
      clockRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const resetClock = () => {
    setIsRunning(false);
    clearInterval(clockRef.current);
    clockRef.current = null;
    setTime(0);
    localStorage.removeItem('time');
  };

  return (
    <>
      <button
        ref={startButtonRef}
        onClick={toggleClock}
        className='mt-5 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'
      >
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button
        onClick={resetClock}
        className='mt-5 bg-red-500 text-white px-4 py-2 ml-5 rounded hover:bg-red-600'
      >
        Reset
      </button>
    </>
  );
};

export default TimerControls;
