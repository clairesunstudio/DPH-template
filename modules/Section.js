import React from 'react';

var Section = React.createClass({

  render: function(){
      return(
        <h3 className="ma__comp-heading  " id="overview">
          Overview
        </h3>
        <section className="ma__rich-text js-ma-rich-text">
          <p>The Tankadere entered the Straits of Fo-Kien, which separate the island of Formosa from the Chinese coast, in the small hours of the night, and crossed the Tropic of Cancer. The sea was very rough in the straits, full of eddies formed by the
            counter-currents, and the chopping waves broke her course, whilst it became very difficult to stand on deck.</p>
        </section>
      )
  }
});

module.exports = Section;
