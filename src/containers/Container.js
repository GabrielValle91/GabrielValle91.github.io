// Container.js
import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import ProjectContainer from './ProjectContainer';
import BlogContainer from './BlogContainer';
import Home from './Home';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import '../styling/transitions.css';

function Container({ location }) {
  return(
    <React.Fragment>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
          <section className="route-section">
            <Switch location={location}>
              <Route path='/' exact component={Home} />
              <Route path='/projects' exact component={ProjectContainer} />
              <Route path='/blog' exact component={BlogContainer} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </React.Fragment>
  )
}

export default withRouter(Container);