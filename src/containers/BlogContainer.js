import React, { Component } from 'react';
import { Card, Container, Header, Icon, Divider } from 'semantic-ui-react';
import BlogEntry from '../components/BlogEntry';

class BlogContainer extends Component {
  constructor(){
    super();
    this.state = {
      articles:[]
    };
  }

  toText = (node) => {
      let tag = document.createElement('div')
      tag.innerHTML = node
      node = tag.innerText
      return node
  }

  shortenText = (text, startingPoint, maxLength) => {
    return text.length > maxLength ? text.slice(startingPoint, maxLength) : text
  }

  populateDataArray = data => {
    for (let i = 0; i < data.items.length; i++){
      let newArticle = {
        title: data.items[i].title,
        description: this.shortenText(this.toText(data.items[i].description), 0, 130),
        content: this.toText(data.items[i].content),
        published: data.items[i].pubDate,
        url: data.items[i].link
      };
      this.setState({articles: [...this.state.articles, newArticle]})
    }
  }

  getBlogEntries = () => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@GabrielValle_50233')
    .then(resp => resp.json())
    .then(resp => {
      this.populateDataArray(resp);
    })
  }

  componentDidMount(){
    this.getBlogEntries();
  }

  render(){
    const blogEntries = this.state.articles.map((entry, idx) => {
      return (
        <BlogEntry
          key={idx}
          entry={entry}
        />
      )
    })
    return(
      <div className="blog-page">
        <Container className="down-shifted">
          <Header as='h2' icon textAlign='center' color='violet'>
            <Icon name='file alternate' circular />
            <Header.Content>Blog Articles</Header.Content>
          </Header>
          <Divider hidden section />
          <Card.Group>{blogEntries}</Card.Group>
        </Container>
      </div>
    )
  }
}

export default BlogContainer;