// Home.js
import React, { Component } from 'react';

class Home extends Component {
  render(){
    return (
      <div className="down-shifted">
        Things I need to add<br />
        <ul>
          <li>Skills section (Component)</li><br />
          <li>Bio section (Component)</li><br />
          <li>Blog Tab (Component)</li><br />
          <li> Component for <br />
            <ul>
              <li>profile picture</li><br />
              <li>Contact info</li><br />
              <li>Resume link</li><br />
              <li>link to github</li><br />
              <li>link to linkedin</li><br />
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home;