import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})
