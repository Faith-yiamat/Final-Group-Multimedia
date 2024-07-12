
import React from 'react';
import './App.css';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Navbar from './NavBar';
import Video from './Video';
import {Route } from 'react-router-dom';

import BlogPost from './Multimedia/multimedia';
import CaseStudies from './CaseStudies/case';


function App() {
  return (
    <div className="App">
       <Navbar/>
      <LandingPage/>
      <Video/>
      <Footer/>
      <BlogPost/>
      <CaseStudies/>
      
      {/* <Route path=''/> */}
     
      
 
    </div>
  );
}

export default App;
