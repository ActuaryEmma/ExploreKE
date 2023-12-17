import React from 'react';
import Articles from "./components/Articles";
import NewArticle from "./components/NewArticle";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {useState, useEffect} from 'react';


function App() {
  const [articles, setArticles] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/articles',{
      'methods':'GET',
      headers : {
        'content-Type':'application/json'
      }
    })
    .then(response => response.json())
    .then(response => setArticles(response))
    .catch(error => console.log(error))

  },[])

  return(
    <BrowserRouter>
    <div>
      <Header />
    </div>

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/articles' element={<Articles articles={articles} />}></Route>
      <Route path='/new-article' element={<NewArticle />}></Route>
      <Route path='/about' element={<About />}></Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
