import React from "react";

const Message = ({id, checked, message}) => {
    return (
        <div>
        <input
            type="checkbox"
            id={id}
            checked={checked}
        >
        { message } 
        </input>
        </div>
    );
}

export default Message;