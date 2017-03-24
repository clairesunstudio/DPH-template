import React from 'react'

var Logo = React.createClass({
  render: function(){
    return (
      <div className="ma__site-logo">
        <a href="/" title="Mass Gov home page">
          <img src="/assets/images/stateseal.png" alt="Mass Gov" width={75} height={75} />
        </a>
      </div>
    )

  }

})

module.exports = Logo;
