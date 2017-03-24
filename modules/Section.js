import React from 'react'

var Section = React.createClass({
  propTypes: {  //propTypes and React.PropTypes have diff capitalizations
    id:   React.PropTypes.string.isRequired,
  },
  render: function(){
    const id = this.props.id.toLowerCase().split(" ")[0];
      return(
          <h3 className="ma__comp-heading" id={id}>
            {this.props.id}
          </h3>
      )
  }
});

module.exports = Section;
