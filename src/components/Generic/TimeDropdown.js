import React from "react";

const Dropdown = ({ options, value, handleValueSelect }) => {
    return(
        <div>
            <label>
            <select value={value} onChange={handleValueSelect}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
            </select>
            </label>
        </div>
        
    )
}

export default Dropdown