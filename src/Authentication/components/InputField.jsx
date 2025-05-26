import React from 'react'
import "./InputField.css"
const InputField = ({ label, onChange, inputProperties, value, error, className, placeholder = '' }) => {
    return (
        <div className={`${className} ${error ? "error" : ""}`}>
            <label htmlFor="">{label}</label>
            <div>
                <input placeholder={placeholder} type={inputProperties.type} onChange={onChange} value={value} name={inputProperties.name} />
                <p>{error || '\u00A0'}</p>
            </div>
        </div>
    )
}

export default InputField
