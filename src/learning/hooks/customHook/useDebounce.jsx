import { useRef } from "react"

export const useDebounce = (
    callback,
    delay
) => {
    const callbackRef = useRef(callback);
    const timer = useRef(null)

    React.useLayoutEffect(() => {
        callbackRef.current = callback;

    })
    const naiveDebounce = (
        func,
        delayms,
        ...args
    ) => {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            func(...args)

        }, delayms)
    }
    return React.useMemo(() => (...args) => naiveDebounce(
        callbackRef.current,
        delay,
        ...args,
    ), [delay])

}