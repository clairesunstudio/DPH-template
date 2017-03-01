import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Repos from './modules/Repos'
import Content from './modules/Content'
import Home from './modules/Home'


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos(/new)" component={Repos}>
        <Route path="/repos/:year/:quarter" component={Content}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
