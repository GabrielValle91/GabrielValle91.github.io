// Home.js
import React, { Component } from 'react';
import ProfileContainer from './ProfileContainer';

class Home extends Component {
  render(){
    return (
      <div className="home-page">
        <div className="down-shifted">
          <ProfileContainer />
        </div>
      </div>
    )
  }
}

export default Home;