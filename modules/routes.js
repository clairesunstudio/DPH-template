import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import Content from './Content'
import NotFound from './NotFound'


module.exports = (
  <Router history={browserHistory}>
      <IndexRedirect to="/2017/3" />
      <Route name="report" path="/:year/:quarter" component={Content}/>
      <Route path="*" component={NotFound} />
  </Router>
)
