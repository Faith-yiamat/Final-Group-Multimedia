
import React from 'react';
import './App.css';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Navbar from './NavBar';
import Video from './Video';
import {Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <Navbar/>
      <LandingPage/>
      <Video/>
      <Footer/>
      {/* <Route path=''/> */}
     
      
 
    </div>
  );
}

export default App;
