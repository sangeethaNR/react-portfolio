import React, { Component } from 'react';
import PortfolioContainer from "./components/PortfolioContainer";
//  import UncontrolledLottie from './components/UncontrolledLottie';

import Footer from './components/Footer';
 class App extends Component {
  render() {
    return (
      <div className="App">
    
        <PortfolioContainer />
        <Footer />
      </div>
    
    );
  }
}
  export default App;