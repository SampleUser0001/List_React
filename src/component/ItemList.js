import React from "react";
import Item from "./Item";
import { useItems } from "../provider/ItemProvider";

export default function ItemList() {
    const { items } = useItems();

    // items.map(item => console.info(item.id));

    return (
        <div>
            {items.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    );
}

