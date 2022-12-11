import React from "react";
import Checkbox from "./Checkbox";

const Item = ({ id, checked, message }) => {
    return (
        <div>
            <Checkbox id={id} checked={checked} />
            {message}                
        </div>
    );
}

export default Item;