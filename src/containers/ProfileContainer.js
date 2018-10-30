import React, { Component } from 'react';
import Skills from '../components/Skills';
import Profile from '../components/Profile';

class ProfileContainer extends Component{

  render(){
    return(
      <React.Fragment>
        <Profile />
        <Skills />
      </React.Fragment>
    )
  }
}

export default ProfileContainer;