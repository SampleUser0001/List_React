import React, { createContext, useState, useContext } from "react";
import messageDatas from "../static/messages.json";

const ItemContext = createContext();
export const useItems = () => useContext(ItemContext);

export default function ItemProvider({ children }) {
    const [items, setMessages] = useState(messageDatas);
    
    const onChange = (id) => {
        setMessages(
            items.map(item => (item.id === id ? item.checked = !item.checked : item))
        );
    }
    
    return (
        <ItemContext.Provider value={{ items, onChange }}>
            {children}
        </ItemContext.Provider>
    );
    
}