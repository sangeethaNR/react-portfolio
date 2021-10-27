import React, { Component } from 'react';
 
 import UncontrolledLottie from './components/UncontrolledLottie';

 class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>REACT LOTTIES</h1>
        <div className="lotties">
          <UncontrolledLottie />
         
        </div>
      </div>
    );
  }
}
  export default App;