import React, { Component } from 'react';
import { Card, Modal, Image } from 'semantic-ui-react';

class Project extends Component{
  render(){
    const {project} = this.props;
    return(
      <React.Fragment>
        <Modal trigger={<Card>
            <Card.Content>
            <Card.Header>{project.title}</Card.Header>
            <Card.Description><Image src={project.image} /></Card.Description>
            </Card.Content>
            </Card>} closeIcon>
          <Modal.Header>{project.title} - {project.primaryTech.join(' & ')}</Modal.Header>
          <Modal.Content>
            <Modal.Description>
            <Image src={project.image} />
            <p>Description : {project.description}</p>
            <p><a href={project.link}>Project Demo</a></p>
            <p>Technologies Used: {project.technologies}</p>
            <p><a href={project.codeLink}>Code</a></p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    )
  }
}

export default Project;