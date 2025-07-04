import { useRef, useState } from "react";



export default function StopWatch() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);


    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now())
        }, 10);

    }

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let secondPasses = 0
    if (startTime !== null && now != null) {
        secondPasses = (now - startTime) / 1000

    }

    return (

        <>
            <h1>Time passed: {secondPasses.toFixed(3)}</h1>
            <button onClick={handleStart}>
                Start
            </button>
            <button onClick={handleStop}>
                Stop
            </button>
        </>
    )
}