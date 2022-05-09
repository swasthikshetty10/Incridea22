import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);
  return getReturnValues(countDown);
};



const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

const ExpiredNotice = () => {
  return (
    <div className='text-5xl text-igold'>
      <span>Incridea is Live!</span>
      <p style={{fontFamily:'Cinzel'}}className='mt-3 text-3xl text-gray-400'>#HigherAndHigher</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex gap-3 text-center">
      <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
      <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
      <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
      <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ setSecond }) => {
  const [days, hours, minutes, seconds] = useCountdown("2022-05-12");
  setSecond(seconds)
  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <div className=" flex flex-col items-center justify-center pt-20 -mt-36 md:m-0 ">
              <h2 className="inline-flex gap-3 text-3xl sm:text-4xl lg:text-5xl m-3 text-igold p-2 sm:p-3 lg:p-4 bg-opacity-30 backdrop-blur-lg tracking-wide rounded-md bg-gray-1000 font-light">
                The Countdown Has Begun
              </h2>
              <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds} />
              <h2 style={{fontFamily: 'Cinzel'}} className="p-1 text-md md:text-xl mt-5 text-gray-400  bg-opacity-30 backdrop-blur-lg rounded-md bg-gray-1000">
                ...in the meantime, check out our{" "}
                <Link
                  to="/events"
                  className="text-[#cd9b58] hover:text-gray-100 transition-colors ease-out "
                >
                  events
                </Link>
                !
              </h2>
            </div>
    );
  }
};

export default CountdownTimer;
