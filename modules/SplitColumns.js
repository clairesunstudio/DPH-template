import React from 'react';

var SplitColumns = React.createClass({
  propTypes: {  //propTypes and React.PropTypes have diff capitalizations
    image:   React.PropTypes.string.isRequired
  },
  render: function(){
    return(
      <section className="ma__split-columns">
        <div className="ma__split-columns__container">
          <div className="ma__split-columns__column">
          {this.props.children[0]}
          </div>
          <div className="ma__split-columns__column">
          {this.props.children[1]}
          </div>
        </div>
      </section>
    )
  }
  });

module.exports = SplitColumns;
