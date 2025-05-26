import React, { useEffect, useState } from 'react'

const useDebouncer = ({ query, timeDelay = 500, apicall, args = [] }) => {
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        if (!query || typeof apicall !== 'function') return;
        setLoading(true);
        setError(null)
        const handler = setTimeout(async () => {
            try {
                const data = await apicall(query, ...(Array.isArray(args) ? [args]: args));
                setResult(data)
            } catch (error) {
                console.log(error)
                setError(error)
            } finally {
                setLoading(false)
            }
        }, timeDelay)
        return () => {
            clearTimeout(handler)
        }
    }, [query, timeDelay, apicall, args])
    return { result, loading, error }
}

export default useDebouncer
