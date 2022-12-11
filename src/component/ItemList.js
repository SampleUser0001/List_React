import React from "react";
import Item from "./Item";

const ItemList = ({ messages = [] }) => {
    return (
        <div>
            {messages.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    );
}

export default ItemList;