import React, { Component } from 'react';
import PortfolioContainer from "./components/PortfolioContainer";
import background from "./assets/images/developer2.jfif";
//  import UncontrolledLottie from './components/UncontrolledLottie';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
 export default function App() {
  

    return (
      
      // <div  style={{ backgroundImage: `url(${background})`}} className="App">
    <div className="App">
        <PortfolioContainer />
        <Footer />
      </div>
    
    );
  }

