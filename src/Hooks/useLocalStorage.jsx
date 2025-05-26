import React, { useState } from 'react'



//check if windows is undefined, otherwise 
const isBrowser = typeof window != undefined;

const useLocalStorage = (key, initialValue) => {
    const [error, setError] = useState(null)
    if (!isBrowser) {
        setError(null)
    }


    if (!key) {
        setError("key not provided")
    }

    const storedValue = localStorage.getItem(key)
    const initial = storedValue ? JSON.parse(storedValue) : initialValue

    const [value, setValue] = useState(initial)

    const setValues = (newValue) => {
        try {
            const valuetoStore = typeof newValue == 'function' ? newValue() : newValue;
            setValue(valuetoStore)
            localStorage.setItem(valuetoStore)
        }catch(e){
            console.log(e)
            alert('error setting ')
        }
    }
    const remove=()=>{
        try {
                localStorage.removeItem(key);
                setValue(undefined)
        } catch (error) {
            console.log(error)
        }
    }




    // const []

    return {
        value,setValue,remove
    }
}

export default useLocalStorage
