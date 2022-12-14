import React from "react";
import Checkbox from "./Checkbox";

const Item = ({ id, checked, message, onChange = f => f}) => {
    return (
        <div>
            <Checkbox id={id} checked={checked} onChange={onChange}/>
            {message}                
        </div>
    );
}

export default Item;