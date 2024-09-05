// this is App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
