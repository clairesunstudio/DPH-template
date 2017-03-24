import React from 'react'
import NavLink from './NavLink'
import Search from './Search'
import TopNav from './TopNav'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {
    event.preventDefault()
    const year = event.target.elements[0].value
    const quarter = event.target.elements[1].value
    const path = `/repos/${year}/${quarter}`
    this.context.router.push(path)
  },

  render() {
    return (
      <div>
      <TopNav onSubmit={this.handleSubmit}/>
        {this.props.children}
      </div>
    )
  }
})
