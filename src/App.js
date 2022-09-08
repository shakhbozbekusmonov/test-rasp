import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './sass/main.scss';
import Header from "./components/Header";
import Home from "./pages/Home";
import Class1 from "./pages/Class1";

const App = () => {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path='/' index element={<Home/>}/>
                    <Route path='class1' element={<Class1/>}/>
                </Routes>
            </Router>
        </>
    );
};

export default App;
