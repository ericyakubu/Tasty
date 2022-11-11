import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SearchProvider } from "./contextAPI";
import { GlobalStyles } from "./GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <GlobalStyles />
        <BrowserRouter>
            <SearchProvider>
                <App />
            </SearchProvider>
        </BrowserRouter>
    </React.StrictMode>
);
