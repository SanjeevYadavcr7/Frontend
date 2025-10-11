import { useState } from 'react';
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';
import { useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(() => {
    const currentTime = localStorage.getItem('time');
    return JSON.parse(currentTime) || 0;
  });

  const handleSetTime = (updatedTime) => {
    setTime(updatedTime);
  };

  useEffect(() => {
    localStorage.setItem('time', time);
  }, [time]);

  return (
    <div>
      <div className='max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center'>
        <TimerDisplay time={time} />
        <TimerControls setTime={handleSetTime} />
      </div>
    </div>
  );
};

export default App;
