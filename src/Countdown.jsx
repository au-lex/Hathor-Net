import React, { useState,useEffect} from 'react'

const Countdown = ({ targetDate, defaultValue }) => {
    const [timeRemaining, setTimeRemaining] = useState(defaultValue);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();
            if (difference <= 0) {
                setTimeRemaining(defaultValue)
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                 const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeRemaining({days,hours,minutes,seconds})
            }
        }, 1000) //updates every second
        
        return () => clearInterval(intervalId);
        
    }, [targetDate, defaultValue])
    
  return (
      <div className=' text-white p-3 py-2 rounded-sm'>
          <ul className='flex flex-row gap-[18px] content-center justify-center mt-4 text-center'>
              <li className='bg-black rounded-md text-white w-10 h-10 py-2'>{timeRemaining.days }</li>
              <li className='bg-black rounded-md text-white w-10 h-10 py-2'>{timeRemaining.hours }</li>
              <li className='bg-black rounded-md text-white w-10 h-10 py-2'>{timeRemaining.minutes}</li>
              <li className='bg-black rounded-md text-white w-10 h-10 py-2'>{timeRemaining.seconds}</li>
     </ul>
    </div>
  )
}

export default Countdown