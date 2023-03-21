import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FrontendSkills from "./pages/FrontendSkills";
import Header from "./components/Header";
import Contacts from "./pages/Contacts";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";


function App() {
  return (
    <>
        <Header/>
        <div className="container page">
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/frontend-skills" element={<FrontendSkills />}/>
                <Route path="/contacts" element={<Contacts />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
            </Routes>
        </div>
        <Footer/>
    </>
  );
}

export default App;
