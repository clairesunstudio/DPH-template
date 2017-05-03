import React from 'react'

var Logo = React.createClass({
  propTypes:{
    class:  React.PropTypes.string.isRequired,
    width:   React.PropTypes.number.isRequired,
    height:     React.PropTypes.number.isRequired,
  },
  render: function(){
    return (
      <div className={this.props.class}>
        <a href="http://pilot.mass.gov" title="Mass Gov home page">
          <img src="/assets/images/stateseal.png" alt="Massachusetts State Seal" width={this.props.width} height={this.props.height} />
        </a>
      </div>
    )

  }

})

module.exports = Logo;
