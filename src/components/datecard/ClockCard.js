import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function ClockCard({ selectedDate, text, index, selectedIndex, setSelectedIndex }) {
  const [same, setSame] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);

  const handleClick = () => {
    const now = new Date().getTime();
    if (now - lastClickTime < 300) {
      // Çift tıklama işlemi
      setSelectedIndex(null);
    } else {
      // Tek tıklama işlemi
      setSelectedIndex(index);
    }
    setLastClickTime(now);
  };

  useEffect(() => {
    setSame(sameTime(times));
  }, [selectedDate]);

  const time = useSelector((state) => state.time);

  const times = Array.isArray(time.time) ? time.time.flat() : []; // Ensure times is an array

  const sameTime = (times) => {
    return times.some((time) => time === text);
  };

  return (
    <div
      id="date"
      onClick={handleClick}
      className={
        `shadow-xl cursor-pointer lg:text-2xl text-center h-14 w-14 lg:h-28 lg:w-28 rounded-full flex font-semibold items-center justify-center border-2 border-[#567483] ` +
        (index === selectedIndex || same
          ? 'bg-[#567483] text-white'
          : 'bg-white') +
        (same ? ' pointer-events-none bg-black border-none text-white' : '') // Add !important to the classes
      }
    >
      {text}
    </div>
  );
}
