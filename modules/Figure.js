import React from 'react';


var Figure = React.createClass({
  propTypes: {  //propTypes and React.PropTypes have diff capitalizations
    image:   React.PropTypes.string.isRequired,
    align:     React.PropTypes.string
  },
  render: function(){
    return(
      <figure className={'ma__figure ' + this.props.align}>
        <img className="ma__image" alt="alt text" src={this.props.image} height width />
        <figcaption className="ma__figure__caption">
          <p><b>XXXX Year-to-Date Deaths by County and Town</b></p>
          <p>Tri-slider/scale showing the percentage of deaths broken down among the groups in each category (gender, age, and race). Also, it’s possible to add in the comparison to all deaths chart they have for each element in the QR.
          </p>
        </figcaption>
      </figure>
    )
  }
  });

module.exports = Figure;
