import React from 'react'

var LinkGroup = React.createClass({
  render: function(){
    return (
      <nav role="navigation">
        <h2 className="visually-hidden">FooterLinks1</h2>
        <ul className="ma__footer-links__items">
          {this.props.children}
        </ul>
      </nav>
    )

  }

})

module.exports = LinkGroup;
