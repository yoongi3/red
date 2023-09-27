import React from "react";

const Dropdown = ({ options, value, handleValueSelect, style}) => {
    
    return(
        <label>
            <select style={style} value={value} onChange={handleValueSelect}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
            </select>
        </label>
    )
}

export default Dropdown