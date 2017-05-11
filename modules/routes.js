import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import App from './App'
import Content from './Content'
import NotFound from './NotFound'

// var myUrl = window.location.href
// myUrl = myUrl.substring(0,myUrl.lastIndexOf("/"))
// var arr = myUrl.split('/')
// var myRoot = arr[0] + "//" + arr[2] + "/"
// var subdir = arr[3] || ""
// if (arr[3]==="dphopioidqr"){
//        myRoot += subdir + "/";
//    }
// export var myRoot;
// console.log("myRoot="+myRoot)

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/" />
      <Route name="report" path="/:year/:quarter" component={Content}/>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
)
