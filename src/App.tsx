import React, { useState } from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";

function App() {
    const [searchSort, setSearchSort] = useState<Array<string>>([]);
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/recipe/:id" element={<RecipePage />} />
            </Routes>
        </>
    );
}

export default App;
