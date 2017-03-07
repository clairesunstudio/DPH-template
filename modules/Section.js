import React from 'react'
// import Paragraph from './Paragraph'

// const arr = [
//   "Suspendisse non tempus justo. Pellentesque malesuada lectus augue, eu blandit ex hendrerit eget. In non convallis eros. Maecenas consectetur neque a nibh faucibus blandit. In quis urna sollicitudin, dictum sapien sit amet, rutrum metus. Donec sed risus neque. Ut a orci ex. Morbi laoreet suscipit tortor at ullamcorper.eu blandit ex hendrerit eget. In non convallis eros. Maecenas consectetur neque a nibh faucibus blandit. Pellentesque malesuada lectus augue, eu blandit ex hendrerit eget. In non convallis eros. Maecenas consectetur neque a nibh faucibus blandit.",
//   "Tri-slider/scale showing the percentage of deaths broken down among the groups in each category (gender, age, and race). Also, it’s possible to add in the comparison to all deaths chart they have for each element in the QR."
// ]
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
