import React from 'react';
import Articles from "./components/Articles";
//import bg from "./images/explore.jpg";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
//import MidSection from "./components/MidSection"

function App() {
  return(
    <BrowserRouter>
    <div>
      <Header />
    </div>

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/articles' element={<Articles />}></Route>
      <Route path='/about' element={<About />}></Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
