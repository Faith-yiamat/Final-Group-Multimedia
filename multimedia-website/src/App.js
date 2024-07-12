
import React from 'react';
import './App.css';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Navbar from './NavBar';
import BlogPost from './Multimedia/multimedia';
import CaseStudies from './CaseStudies/case';


function App() {
  return (
    <div className="App">
       <Navbar/>
      <LandingPage/>
      <BlogPost/>
      <Footer/>
      <CaseStudies/>
      
     
      
 
    </div>
  );
}

export default App;
