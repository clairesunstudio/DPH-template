import React from 'react';

var SidebarNav = React.createClass({

  render: function(){
      return(
        <nav className="ma__action-details__anchor-links js-scroll-anchors" aria-labelledby="page_contents">
          <h3 className="visually-hidden" id="page_contents">Page Contents</h3>
          <button className="ma__action-details__toggle-link js-scroll-anchors-toggle">+</button>
          <a href="#overview" className="is-active">Overview</a>
          <a href="#geographic" className>Geographic Data</a>
          <a href="#demographics" className>Demographics</a>
          <a href="#prescription" className>Prescription Activity</a>
          <a href="#emergency" className>Emergency Incidents</a>
        </nav>
      )
  }
});

module.exports = SidebarNav;
