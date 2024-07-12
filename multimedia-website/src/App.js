
import React from 'react';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Navbar from './NavBar';
import Video from './Video';
import {BrowserRouter as  Router, Route, Routes } from 'react-router-dom';


import BlogPost from './Multimedia';
import CaseStudies from './CaseStudies';


function App() {
  return (
    <div>
      <Router>

     <Routes>
      <Route exact path= "/" element= {
        <> <Navbar/>
           <LandingPage/>
          <Footer/>    </>

      }
      />
      <Route path= "/Video" element= {<Video/>}/>
      <Route path = "/Home" element ={<LandingPage/>} />
      <Route path = "/CaseStudies" element = {<CaseStudies/>}/>




 
      </Routes>
      </Router>
     </div>
      
 
    
  );
}

export default App;
