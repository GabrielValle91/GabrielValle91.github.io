// ProjectContainer.js
import React, { Component } from 'react';
import Project from '../components/Project';

class ProjectContainer extends Component{
  constructor(){
    super();
    this.state={
      projects:[
        {
          title: 'Wildcard',
          image: '',
          link: 'https://wildcard-sinatra.herokuapp.com/',
          description: '',
          technologies: 'Ruby, Sinatra, CSS, HTML'
        },
        {
          title: 'Speed',
          image: 'https://i.imgur.com/jLtCSya.jpg',
          link: 'https://speed-tms.herokuapp.com/',
          description: '',
          technologies: 'Ruby, Rails, Javascript, JQuery, Bootstrap, OAuth'
        },
        {
          title: 'PAWS',
          image: '',
          link: 'https://young-beyond-21632.herokuapp.com/',
          description: '',
          technologies: 'Ruby, Rails API, React, Redux, React Router, Semantic-UI'
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
      <div>
        {projectList}
      </div>
    )
  }
}

export default ProjectContainer;