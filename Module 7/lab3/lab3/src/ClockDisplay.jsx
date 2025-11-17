import { useState, useEffect } from "react";

// Renders a digital time that updates every second
export function ClockDisplay() {

    const [date, setDate] = useState(new Date());
    const [tickCount, setTickCount] = useState(0);

    useEffect(() => { // first arg is usually an arrow function
        setInterval(() => tick(), 1000);
        console.log('Clock component mounted');
    }, []); // second arg is an array of dependencies

    const tick = () => {
        setDate(new Date());
        console.log('tick'); // track the effect frequency
        setTickCount((tickCount) => tickCount + 1);
    };

    return (
        <div className="Clock">
            <h3>Digital Clock</h3>
            {date.toLocaleTimeString()}
            <span>
                    tick count: {tickCount}
            </span>
        </div>
    );    
}
// ++ Try removing the dependency array from useEffect
// and notice the difference in 'tick' log messages
// ++ Why do the console messages appear double?