import React from "react";
import "./Style.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import MyGoogleKeep from "./Pages/MyGoogleKeep";
import Error from "./Pages/Error";

const Web = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/gkeep-cool-app" element={<Home />}></Route>
                    <Route exact path="/gkeep-cool-app/contact" element={<Contact />}></Route>
                    <Route exact path="/gkeep-cool-app" element={<MyGoogleKeep />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
            </Router>


        </>
    );
};

export default Web;