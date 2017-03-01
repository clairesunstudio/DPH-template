import React from 'react';

var Section = React.createClass({

  render: function(){
      return(
        <div>
          <h3 className="ma__comp-heading  " id={this.props.id.toLowerCase()}>
            {this.props.id}
          </h3>
          <section className="ma__rich-text js-ma-rich-text">
            <p>{this.props.para}</p>
          </section>
        </div>
      )
  }
});

module.exports = Section;
