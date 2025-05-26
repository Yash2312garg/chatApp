import { useRef } from "react";
import StopWatch from "./Stopwatch";
export default function Counter() {
    let ref = useRef(0)
    function handleClick() {
        ref.current = ref.current + 1
        alert('you clicked ' + ref.current + ' times')
    }

    return (
        <>
            <button onClick={handleClick}>
                click me
            </button>
            <StopWatch />
        </>
    )

}