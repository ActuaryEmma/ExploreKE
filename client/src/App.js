import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import NavBar from './navbar/Navbar';
import Blog from './blog/Blog';
import Contact from './contact/Contact';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setArticles(resp))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/blog"
          element={<Blog articles={articles} setArticles={setArticles} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;