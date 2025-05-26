import React, { createContext, useContext, useState } from 'react'



const currentContext = createContext(null)

const Example1 = () => {
    const [theme, setTheme] = useState('light');
    console.log(theme)
    return (
        <currentContext.Provider value={theme}>
            <Form />
            <label htmlFor="">
                <input
                    type='checkbox'
                    checked={theme === 'dark'}
                    onChange={(e) => {
                        setTheme(e.target.checked ? 'dark' : 'light')
                    }}
                />
            </label>
        </currentContext.Provider>
    )
}

export default Example1

function Form({ children }) {
    return (
        <Panel>
            <Button>
                Signup
            </Button>
            <Button>
                Login
            </Button>
        </Panel>
    )
}

function Panel({ title, children }) {
    const theme = useContext(currentContext);
    const className = 'panel' + theme
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button({ children }) {
    const theme = useContext(currentContext);
    const className = 'button-' + theme;
    return (
        <button className={className}>
            {children}
        </button>
    )
}