import React, { Component } from 'react';
import { Container, Icon, Image } from 'semantic-ui-react';
import '../styling/Profile.css';

class Profile extends Component{
  render(){
    return(
      <div className="profile-section">
        <Image src="https://i.imgur.com/DgQekqX.jpg?1" alt='profile pic' rounded />
        <Container className="centered">
          <p>While my path to becoming a Web Developer was non-traditional, my love of problem solving and technology has me motivated to continually learn and grow in my career.</p>
          <p>My interest in programming began my first year at Intelligent Logistics. The department I was in had a need for a transportation management system, so I took it upon myself to provide a solution. I created a system using MS Access and VBA, learning as I went. Little did I know this decision would set me on a new path with a new found passion.</p>
          <p>My love for learning eventually lead me to Flatiron School's online program, where I got to dive into web development technologies. Now that I am pursuing a career as a developer, I am excited to continue my passion of life long learning and develop my skills as a web developer.</p>
        <a href="https://github.com/GabrielValle91" className="profile-links"><Icon name="github" link size="big"></Icon></a>
        <a href="https://www.linkedin.com/in/gabrielianvalle/" className="profile-links"><Icon name="linkedin" link size="big"></Icon></a>
        </Container>
      </div>
    )
  }
}

export default Profile;