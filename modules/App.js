import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <ul role="nav">
          <li><NavLink to="/repos" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/repos/2017/3">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
