import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import Lister from './Lister';

class Skills extends Component{
  constructor(){
    super();
    this.state={
      FrontEnd: ['CSS3', 'HTML5', 'Javascript'],
      BackEnd: ['Ruby', 'SQL'],
      Tools: ['Bootstrap', 'Git', 'JQuery', 'React', 'Ruby on Rails', 'Semantic UI', 'Sinatra'],
      Other: ['Critical Thinking', 'Data Analysis' , 'Problem Solving']
    }
  }
  render(){
    const frontEndLanguages = this.state.FrontEnd.map((language, idx) => {
      return (<Lister key={idx} listItem={language} />)
    })
    const backEndLanguages = this.state.BackEnd.map((language, idx) => {
      return (<Lister key={idx} listItem={language} />)
    })
    const programmingTools = this.state.Tools.map((tool, idx) => {
      return (<Lister key={idx} listItem={tool} />)
    })
    const otherSkills = this.state.Other.map((skill, idx) => {
      return (<Lister key={idx} listItem={skill} />)
    })
    return(
      <div className="skill-section">
        <div className="centered column">
          <Divider section />
          <h3>Front-end</h3>
          <Divider section />
          {frontEndLanguages}
        </div>
        <div className="centered column">
          <Divider section />
          <h3>Back-end</h3>
          <Divider section />
          {backEndLanguages}
        </div>
        <div className="centered column">
          <Divider section />
          <h3>Tools</h3>
          <Divider section />
          {programmingTools}
        </div>
        <div className="centered column">
          <Divider section />
          <h3>Other Skills</h3>
          <Divider section />
          {otherSkills}
        </div>
      </div>
    )
  }
}

export default Skills;