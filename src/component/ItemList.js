import React from "react";
import Item from "./Item";

const ItemList = ({ messages = [], onChange = f => f}) => {
    return (
        <div>
            {messages.map(item => (
                <Item key={item.id} {...item} onChange={onChange}/>
            ))}
        </div>
    );
}

export default ItemList;