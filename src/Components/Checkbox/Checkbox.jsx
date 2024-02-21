import React, { useState } from 'react'

export const Checkbox = ({options = [], onChange, disabled}) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        onChange(event);
    };
    return (
        <div>
            {options.map( ([option, tag]) => 
            <div className="form-check" key={option}>
                <input
                    className="form-check-input"
                    type="radio"
                    id={`option-${option}`}
                    name={`option-${option}`}
                    value={ option}
                    disabled={disabled}
                    checked={option? selectedOption == option : true}
                    onChange={handleOptionChange}
                />
                <label className="form-check-label" htmlFor={`option-${option}`}>
                    {tag}
                </label>
            </div>)}
        </div>
    )
}

export default Checkbox
