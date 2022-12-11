import React, { useState } from "react";
import Title from "./component/Title";
import ItemList from "./component/ItemList";
import messageDatas from "./static/messages.json";

export default function App() {
    const [ messages ] = useState(messageDatas);
    // TODO チェックボックス押下時の挙動を書く必要がある。
    return (
        <>
            <Title />
            <ItemList messages={messages}/>
        </>
    ); 
}
