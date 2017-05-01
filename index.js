import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import App from './modules/App'
import Content from './modules/Content'
import NotFound from './modules/NotFound'


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/2017/3" />
        <Route name="report" path="/:year/:quarter" component={Content}/>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById('app'))
