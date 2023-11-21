import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home"
import About from "./about/About"
import NavBar from "./navbar/Navbar"
import Blog from "./blog/Blog"
import Contact from "./contact/Contact"

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
      
    );
}

export default App;
