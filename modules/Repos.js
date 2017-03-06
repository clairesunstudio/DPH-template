import React from 'react'
import NavLink from './NavLink'

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
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/2017/3">Newest</NavLink></li>
          <li><NavLink to="/repos/2017/2">Last Quarter</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="number" min="2016" max="2017" val="2017" placeholder="year"/> / {' '}
              <input type="number" min="1" max="4" val="1" placeholder="quarter"/>{' '}
              <button class="ma__button-alt ma__button-alt--small" type="submit">View</button>
            </form>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
