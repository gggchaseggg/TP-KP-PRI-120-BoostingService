import React from "react";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./component/Layout/Layout";
import PATHS from "./data/paths";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./util/ScrollToTop";

import './App.css';

export default function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path={PATHS.MAIN} element={<Layout />}>
                        <Route path="" element={<Main />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

