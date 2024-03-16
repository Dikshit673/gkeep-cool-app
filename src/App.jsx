import React from "react";
import "./Applications/Comm_section_folder/Comm_section.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "./Applications/Pages/Home";
import Contact from "./Applications/Pages/Contact";
import MyGoogleKeep from "./Applications/Pages/MyGoogleKeep";
import Error from "./Applications/Pages/Error";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/gkeep-cool-app" element={<Home />}></Route>
          <Route path="/gkeep-cool-app/contact" element={<Contact />}></Route>
          <Route path="/gkeep-cool-app" element={<MyGoogleKeep />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>


    </>
  );
};

export default App;