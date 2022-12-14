import React from "react";

const CheckBox = ({id, checked = false, onChange = f => f}) => {
    return (
        <input type="checkbox"
            id={id}
            checked={checked}
            onChange={() => onChange(id)}
        />
    );
}

export default CheckBox;