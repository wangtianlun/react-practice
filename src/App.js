import React, { Component, Fragment } from 'react';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import CustomLink from './routes/CustomLink';
import TransitionExample from './examples/react-transition-group/Transition';
import CssTransitionExample from './examples/react-transition-group/CssTransition';
import TransitionGroupExample from './examples/react-transition-group/TransitionGroup';
import ReactMotionExample from './examples/react-motion/Simple';
import CssModulesExample from './examples/css-modules/index';
import ReactHelmetExample from './examples/react-helmet/index';
import DecoratorExample from './examples/decorator/index';
import ReduxThunkExample from './examples/redux/index';
import mobxExample from './examples/mobx'
import ReactDndExample from './examples/react-dnd';
import { spy } from 'mobx';
import { observer, inject } from 'mobx-react';
import routesConfig from './routes/index';
import styles from './index.module.css';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const history = createBrowserHistory();

@inject('commonStore')
@observer
class App extends Component {
  renderLinks() {
    return routesConfig.map(route => 
      <li className={styles['menu-item']} key={route.to}>
        <CustomLink to={route.to} name={route.name} activeClass={styles.active} />
      </li>
    )
  }

  renderRoutes() {
    return (
      <Fragment>
        <Route exact path="/react-transition-group/transition" component={TransitionExample} />
        <Route exact path="/react-transition-group/csstransition" component={CssTransitionExample} />
        <Route exact path="/react-transition-group/transitiongroup" component={TransitionGroupExample} />
        <Route exact path="/react-transition-group/reactmotion" component={ReactMotionExample} />
        <Route exact path="/react-transition-group/cssmodules" component={CssModulesExample} />
        <Route exact path="/react-transition-group/react-helmet" component={ReactHelmetExample} />
        <Route exact path="/react-transition-group/decorator" component={DecoratorExample} />
        {/* <Route exact path="/redux/thunk" component={ReduxThunkExample} /> */}
        <Route exact path="/mobx" component={mobxExample} />
        <Route exact path="/react-dnd" component={ReactDndExample} />
      </Fragment>
    )
  }

  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <Router history={history}>
          <div className="menu">
            <ul>{this.renderLinks()}</ul>
            {this.renderRoutes()}
          </div>
        </Router>
      </DragDropContextProvider>
    );
  }

  componentDidMount() {
    // spy(event => {
    //   console.log('spy listener start');
    //   console.log(event);
    //   console.log('spy listener end');
    // })
  }
}

export default App;
