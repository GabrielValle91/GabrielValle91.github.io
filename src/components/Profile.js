import React, { Component } from 'react';
import { Container, Icon, Image } from 'semantic-ui-react';
import '../styling/Profile.css';

class Profile extends Component{
  render(){
    return(
      <div className="profile-section">
        <Image src="https://i.imgur.com/DgQekqX.jpg?1" alt='profile pic' rounded />
        <Container className="centered">
          <p>I am a full stack web developer with a passion for creating innovative solutions that improve work environments.  With experience in Sinatra, Ruby on Rails, JavaScript, VBA and React and a background in Mathematics, I discovered web development when I recognized a need for effective software at my workplace. I bring strong skills in problem solving and analytics that help companies exceed goals while cutting costs. I’m a lifelong learner and avid gamer.</p>
        <a href="https://github.com/GabrielValle91" className="profile-links"><Icon name="github" link size="big"></Icon></a>
        <a href="https://www.linkedin.com/in/gabrielianvalle/" className="profile-links"><Icon name="linkedin" link size="big"></Icon></a>
        </Container>
      </div>
    )
  }
}

export default Profile;