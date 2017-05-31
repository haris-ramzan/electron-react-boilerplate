import React from 'react';
import AbsoluteCenterLayout from '../layouts/AbsoluteCenterLayout';

class Verify extends React.Component {
  render(){
    console.log('Verify props : ', this.props);
    return (
      <AbsoluteCenterLayout>
        <h1>
          Congratulations your email address has been verified
        </h1>
      </AbsoluteCenterLayout>
    );
  }
}

export default Verify;
