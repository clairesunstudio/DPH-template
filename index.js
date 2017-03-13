import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Repos from './modules/Repos'
import Content from './modules/Content'
import Home from './modules/Home'
import NotFound from './modules/NotFound'


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos(/new)" component={Repos}>
        <Route path="/repos/:year/:quarter" component={Content}/>
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById('app'))
