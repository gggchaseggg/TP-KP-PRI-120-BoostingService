import React from "react";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path={PATHS.MAIN} element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}


export default App;
