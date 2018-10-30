// Home.js
import React, { Component } from 'react';
import ProfileContainer from './ProfileContainer';
import { Container, Divider, Header, Icon } from 'semantic-ui-react';

class Home extends Component {
  render(){
    return (
      <div className="home-page">
        <Container className="down-shifted">
          <Header as='h2' icon textAlign='center' color='green'>
            <Icon name='address card outline' circular />
            <Header.Content>About Me</Header.Content>
          </Header>
          <Divider hidden section />
          <ProfileContainer />
        </Container>
        <div className="down-shifted">
          
        </div>
      </div>
    )
  }
}

export default Home;