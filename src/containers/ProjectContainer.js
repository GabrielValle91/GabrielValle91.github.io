// ProjectContainer.js
import React, { Component } from 'react';
import Project from '../components/Project';
import { Card, Container, Header, Icon, Divider } from 'semantic-ui-react';

class ProjectContainer extends Component{
  constructor(){
    super();
    this.state={
      projects:[
        {
          title: 'Wildcard',
          image: 'https://i.imgur.com/UPuHZZl.png',
          link: 'https://wildcard-sinatra.herokuapp.com/',
          description: '',
          technologies: 'Ruby, Sinatra, CSS, HTML',
          codeLink: 'https://github.com/GabrielValle91/sinatra-project',
          primaryTech: ['Sinatra']
        },
        {
          title: 'Speed',
          image: 'https://i.imgur.com/jLtCSya.jpg',
          link: 'https://speed-tms.herokuapp.com/',
          description: '',
          technologies: 'Ruby, Rails, Javascript, JQuery, Bootstrap, OAuth',
          codeLink: 'https://github.com/GabrielValle91/rails-project',
          primaryTech: ['Rails', 'JQuery']
        },
        {
          title: 'PAWS',
          image: 'https://i.imgur.com/UMz13fkm.jpg',
          link: 'https://young-beyond-21632.herokuapp.com/',
          description: '',
          technologies: 'Ruby, Rails API, Devise, React, Redux, React Router, Semantic-UI',
          codeLink: 'https://github.com/GabrielValle91/people-assisting-wandering-strays',
          primaryTech: ['Rails API', 'React']
        }
      ]
    }
  }
  render(){
    const projectList = this.state.projects.map((project, idx) => {
      return (
        <Project
          key={idx}
          project={project}
        />
      )
    })
    return(
      <div className="projectPage">
        <Container>
          <Header as='h2' icon textAlign='center' color='teal'>
            <Icon name='code' circular />
            <Header.Content>Projects</Header.Content>
          </Header>
          <Divider hidden section />
          <Card.Group>{projectList}</Card.Group>
        </Container>
      </div>
    )
  }
}

export default ProjectContainer;