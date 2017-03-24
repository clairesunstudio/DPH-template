import React from 'react'
import NavLink from './NavLink'
import Search from './Search'

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
            <ul>
              <li className="ma__main-nav__item js-main-nav-toggle"><NavLink className="ma__main-nav__top-link" to="/">Home</NavLink></li>
              <li className="ma__main-nav__item js-main-nav-toggle"><NavLink className="ma__main-nav__top-link" to="/repos/2017/3">Newest</NavLink></li>
              <li className="ma__main-nav__item js-main-nav-toggle"><NavLink className="ma__main-nav__top-link" to="/repos/2017/2">Last Quarter</NavLink></li>
              <Search onSubmit={this.handleSubmit}/>
            </ul>
        {this.props.children}
      </div>
    )
  }
})
