import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import Lister from './Lister';

class Skills extends Component{
  constructor(){
    super();
    this.state={
      Languages: ['C++', 'CSS3', 'HTML5', 'Javascript', 'Ruby', 'SQL'],
      Tools: ['Bootstrap', 'Git', 'JQuery', 'React', 'Ruby on Rails', 'Semantic UI', 'Sinatra', 'Unreal Engine 4'],
      Other: ['Critical Thinking', 'Data Analysis' , 'Problem Solving']
    }
  }
  render(){
    const languages = this.state.Languages.map((language, idx) => {
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
          <h3>Languages</h3>
          <Divider section />
          {languages}
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