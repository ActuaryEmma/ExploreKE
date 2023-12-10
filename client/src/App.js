import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home"
import About from "./about/About"
import NavBar from "./navbar/Navbar"
import Blog from "./blog/Blog"
import Contact from "./contact/Contact"

function App() {
  const [articles, setArticles] = useState([])
  const [editedArticle, setEditedArticle] = useState(null)

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get', {
      'methods':'GET',
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(err => console.log(err))

  },[])
  const editArticle = (article) => {
    // console.log("Hello World")
    setEditedArticle(article)
  }
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/blog" element={<Blog articles={articles} editArticle={editArticle}/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
      
    );
}

export default App;
