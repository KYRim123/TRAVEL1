import React, { useState } from 'react'
import './formInputStyle.scss'


function FormInput(props) {
    const [focused, setFocused] = useState(false)
    const {label, onChange, errorMessage, ...inputProps} = props
    const handleFocused = (e)=> {
        setFocused(true)
    }
    return (
        <div className="formInput">
            <label>{label}</label>
            <input 
                onChange={onChange}
                onBlur={handleFocused}
                focused={focused.toString()}
                {...inputProps}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput
