import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/14027-software-engineer.json';

class UncontrolledLottie extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div>
       
        <Lottie
          options={defaultOptions}
          height={400}
          width={450}
        />
      </div>
    );
  }
}

export default UncontrolledLottie;