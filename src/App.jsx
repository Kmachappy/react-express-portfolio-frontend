import React from "react";
import { Route, Routes } from "react-router-dom";
//pages
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
//components
import Header from "./components/Header";
import Footer from "./components/Footer";


export default ()=>{

  const url = 'https://react-portfolio-rojas.herokuapp.com/'
  
  return(
  <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects url={url}/>} />
      <Route path="/about" element={<About url={url}/>} />
    </Routes>
    <Footer/>
  </div>
  )
    
};


