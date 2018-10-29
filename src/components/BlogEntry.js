import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class BlogEntry extends Component{
  dateConvertor = dateValue => {
    let formattedDate = new Date(dateValue).toLocaleString("en-US");
    return formattedDate;
  }
  render(){
    const {entry} = this.props;
    return(
      <React.Fragment>
        <Card href={entry.url}>
          <Card.Content>
            <Card.Header>{entry.title}</Card.Header>
            <Card.Description>{entry.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            Published: {this.dateConvertor(entry.published)}
          </Card.Content>
        </Card>
      </React.Fragment>
    )
  }
}

export default BlogEntry;