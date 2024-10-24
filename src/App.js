import React, {useState, useEffect} from "react";

import './App.css';

import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
import Counter from './components/UI/Counter';
import Service from './components/UI/Service';
import About from './components/UI/About';
import Team from './components/UI/Team';
import Blog from './components/UI/Blog';
import Testimonial from './components/UI/Testimonial';
import Contact from './components/UI/Contact';
import Footer from './components/Footer/Footer';
// import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'


function App() {

  const [theme, setTheme] = useState('')

  const toggleTheme = () =>{
    theme === '' ? setTheme('light-theme') : setTheme('')
  }

  useEffect(()=>{
    document.body.className = theme
  },[theme])
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Counter />
      <Service />
      <About />
      <Team />
      <Blog />
      <Testimonial />
      <Contact />
      <Footer />
    </>
    /* <BrowserRouter>
      <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </BrowserRouter> */
  );
}

export default App;
