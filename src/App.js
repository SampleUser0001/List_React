import React, { useState } from "react";
import Title from "./component/Title";
import ItemList from "./component/ItemList";
import messageDatas from "./static/messages.json";

export default function App() {
    const [ messages, setMessages ] = useState(messageDatas);
    const onChange = (id) => {
        messages.map(message => message.id === id ? message.checked = !message.checked : message );
        setMessages([...messages]);
    }

    return (
        <>
            <Title />
            <ItemList messages={messages} onChange={onChange}/>
        </>
    ); 
}
