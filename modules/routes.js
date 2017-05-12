import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import App from './App'
import Content from './Content'
import NotFound from './NotFound'

const publicPath = '/dphopioidqr';

export const routeCodes = {
  HOME: `${ publicPath }/2017/3`,
  CONTENT: `${ publicPath }/:year/:quarter`,
  NOTFOUND: `${ publicPath }*`,
};
module.exports = (
  <Router history={browserHistory}>
      <IndexRedirect to={routeCodes.HOME} />
      <Route name="report" path={routeCodes.CONTENT} component={Content}/>
      <Route path={routeCodes.NOTFOUND} component={NotFound} />
  </Router>
)
