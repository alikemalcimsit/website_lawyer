import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTime } from '../../redux/time/timeSlice';

export default function DateCard({ setSelectedDate, day, index, selectedIndex, setSelectedIndex }) {
  const dispatch = useDispatch();
  const lastTapRef = useRef(0);

  const handleClick = () => {
    const now = new Date().getTime();
    const DOUBLE_TAP_DELAY = 300;

    if (now - lastTapRef.current < DOUBLE_TAP_DELAY) {
      // Double tap detected
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
      setSelectedDate(day.toString());
      const data = fun();
      dispatch(setTime(data));
    }

    lastTapRef.current = now;
  };

  const datess = useSelector((state) => state.date) || [];

  const fun = () => {
    const foundDates = datess.filter((dater) => dater.selecteddate === day);
    return foundDates.map((dater) => dater.time);
  };

  return (
    <div
      id="date"
      onClick={handleClick}
      className={
        `shadow-xl cursor-pointer lg:text-2xl text-center h-20 rounded-3xl flex font-semibold items-center justify-center border-2 border-[#567483] ` +
        (index === selectedIndex ? 'bg-[#567483] text-white' : '')
      }
    >
      <div>
        {day}
      </div>
    </div>
  );
}
