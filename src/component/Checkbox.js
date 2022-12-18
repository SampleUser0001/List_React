import React from "react";
import { useItems } from "../provider/ItemProvider";

const CheckBox = ({id, checked}) => {
    const { onChange } = useItems();

    return (
        <input type="checkbox"
            id={id}
            checked={checked}
            onChange={id => onChange(id)}
        />
    );
}

export default CheckBox;