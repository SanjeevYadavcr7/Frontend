import { useEffect, useState } from 'react';

const LifeCycleMethods = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log('Component Mounted...');

    return () => {
      console.log('Component Unmounted...');
    };
  }, []);

  useEffect(() => {
    if (count > 0) console.log('Component Updated...');
  }, [count]);

  return (
    <>
      {show && (
        <div>
          <button onClick={() => setShow(!show)}>Show</button>
          <button
            onClick={() => setCount(count + 1)}
            className='w-1/3 bg-gray-100 border border-gray-300 text-purple-800 mt-5 py-2 rounded-lg cursor-pointer 
        hover:bg-purple-200 hover:border-purple-300 transition mb-4'
          >
            Count++
          </button>

          {show && (
            <div>
              <h1 className='text-white'>
                Hi, I'm component and my count is : {count}
              </h1>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default LifeCycleMethods;
