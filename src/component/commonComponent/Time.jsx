import React, { useEffect, useState } from 'react'


const Time = () => {
  const [time, setTime] = useState(((30 * 24 + 14) * 60 * 60 + 59 * 60 + 59) * 1000)

useEffect(() => {
  const worker = new Worker(
    new URL("../countDownWorker.js", import.meta.url),
    { type: "classic" } 
  );

  worker.onmessage = (e) => {
  setTime(e.data)
  };

  worker.postMessage(time);

}, []);


  // useEffect(() => {
  //   if (time <= 0) return

  //   const interval = setInterval(() => {
  //     setTime(prev => prev - 1000)
  //   }, 1000)

  //   return () => clearInterval(interval)
  // }, [time])

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const totalMinutes = Math.floor(totalSeconds / 60)
    const totalHours = Math.floor(totalMinutes / 60)

    const days = Math.floor(totalHours / 24)
    const hours = totalHours % 24
    const minutes = totalMinutes % 60
    const seconds = totalSeconds % 60

    return [days, hours, minutes, seconds]
  }

  const [day, hour, minute, second] = formatTime(time)

  return (
    <div className='flex gap-4 justify-start items-end'>
      <TimeBox label="Days" value={day<10?`0${day}`:day} />
      <Colon />
      <TimeBox label="Hours" value={hour} />
      <Colon />
      <TimeBox label="Minutes" value={minute} />
      <Colon />
      <TimeBox label="Seconds" value={second} />
    </div>
  )
}

const TimeBox = ({ label, value }) => (
  <div className='flex flex-col items-start gap-1'>
    <p className='font-poppins font-medium text-[12px]'>{label}</p>
    <h3 className='font-Inter font-bold text-[32px] leading-[30px]'>{value}</h3>
  </div>
)

const Colon = () => (
  <p className='text-red font-Inter font-black text-[20px] leading-[30px]'>:</p>
)

export default Time
