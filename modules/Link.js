import React from 'react'

var Link = React.createClass({
  render: function(){
    return (
      <li className="ma__footer-links__item">
        <a href={this.props.url} className="ma__footer-links__link">{this.props.text}</a>
      </li>
    )

  }

})

module.exports = Link;
