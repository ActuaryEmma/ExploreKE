import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import NavBar from './navbar/Navbar';
import Blog from './blog/Blog';
import Contact from './contact/Contact';
import FullArticle from './blog/FullArticle';
import NewForm from './blog/NewForm';

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
        <Route path="/article/:articleId" element={<FullArticle/>} />
        <Route path="/new-article" element={<NewForm />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;