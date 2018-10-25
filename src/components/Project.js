import React, { Component } from 'react';

class Project extends Component{
  render(){
    const {project} = this.props;
    return(
      <div>
        Title: {project.title}<br/>
        <img src={project.image} alt="project img"/>
      </div>
    )
  }
}

export default Project;