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
