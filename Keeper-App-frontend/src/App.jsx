import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import EditForm from "./pages/EditForm.jsx";
function App() {

  return (
        <>
            <Router>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/edit/:id"} element={<EditForm/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
