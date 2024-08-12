import React, { useEffect, useState } from 'react';
import './digital_clock.css';

export const DigitalClock = () => {

    const [curentTime, setCurrentTime] = useState(new Date());

    useEffect (() => {
        const timer = setInterval(() => {
            setCurrentTime (new Date())
        },1000);

        return () => clearInterval(timer);
    }, [])

    const formatTimeWithLeadingZero = (num) => {
        return num<10 ? `0${num}` : num;
    }

    const formatHour = (hour) => {
        return hour === 0 ? 12 : hour>12 ? hour-12:hour;
    }

    const formatDate = (date) => {
        const options = {weekday:"long", year: "numeric", month: "short", day: "numeric"};
        return date.toLocaleDateString(undefined, options);
    }

    return (
        <div className='digital_clock'>
            <div className="time">
                {formatTimeWithLeadingZero(formatHour(curentTime.getHours()))}
                : 
                {formatTimeWithLeadingZero(curentTime.getMinutes())}
                {/* {formatTimeWithLeadingZero(curentTime.getSeconds())} */}
                {curentTime.getHours() >=12 ? " PM" : " AM" }
            </div>
            <div className="date">
                {formatDate(curentTime)}
            </div>
        </div>
    )
}
