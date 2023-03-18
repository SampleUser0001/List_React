# List_React
ReactでListを作る。

- [List\_React](#list_react)
  - [tree](#tree)
  - [files](#files)
    - [App.js](#appjs)
    - [index.js](#indexjs)
    - [component/Checkbox.js](#componentcheckboxjs)
    - [component/Item.js](#componentitemjs)
    - [component/ItemList.js](#componentitemlistjs)
    - [component/Title.js](#componenttitlejs)
    - [provider/ItemProvider.js](#provideritemproviderjs)
    - [static/messages.json](#staticmessagesjson)


## tree

```
.
├── App.js
├── component
│   ├── Checkbox.js
│   ├── Item.js
│   ├── ItemList.js
│   └── Title.js
├── index.js
├── provider
│   └── ItemProvider.js
└── static
    └── messages.json

3 directories, 8 files
```

## files

### App.js

``` javascript
import React from "react";
import Title from "./component/Title";
import ItemList from "./component/ItemList";

export default function App() {
    return (
        <>
            <Title />
            <ItemList />
        </>
    ); 
}
```

### index.js

``` javascript
import React from "react";
import { createRoot } from "react-dom/client"
import App from "./App";
import ItemProvider from "./provider/ItemProvider";

//createRoot(document.getElementById("root")).render(<Menu recipes={data} />);
createRoot(document.getElementById("root")).render(
    <ItemProvider>
        <App />
    </ItemProvider>
);
```

### component/Checkbox.js

``` javascript
import React from "react";
import { useItems } from "../provider/ItemProvider";

const CheckBox = ({id, checked}) => {
    const { onChange } = useItems();

    return (
        <input type="checkbox"
            id={id}
            checked={checked}
            onChange={() => onChange(id)}
        />
    );
}

export default CheckBox;
```

### component/Item.js

``` javascript
import React from "react";
import Checkbox from "./Checkbox";

const Item = ({ id, checked, message }) => {

    return (
        <div>
            <Checkbox id={id} checked={checked}/>
            {message}                
        </div>
    );
}

export default Item;
```

### component/ItemList.js

``` javascript
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
```

### component/Title.js

``` javascript
import React from "react";

const Title = () => {
    return (
        <h1>Message List</h1>
    );
}

export default Title;
```

### provider/ItemProvider.js

``` javascript
import React, { createContext, useState, useContext } from "react";
import messageDatas from "../static/messages.json";

const ItemContext = createContext();
export const useItems = () => useContext(ItemContext);

export default function ItemProvider({ children }) {
    const [items, setMessages] = useState(messageDatas);
    
    const onChange = (id) => {
        items.map(item => item.id === id ? item.checked = !item.checked : item);
        setMessages([...items]);
    }

    return (
        <ItemContext.Provider value={{ items, onChange }}>
            {children}
        </ItemContext.Provider>
    );
    
}
```

### static/messages.json

``` javascript
[
    {
        "id": 1,
        "message": "hoge",
        "checked": false
    },
    {
        "id": 2,
        "message": "piyo",
        "checked": true
    }

]
```
