import React from 'react';

// const arr = [
//   "Suspendisse non tempus justo. Pellentesque malesuada lectus augue, eu blandit ex hendrerit eget. In non convallis eros. Maecenas consectetur neque a nibh faucibus blandit. In quis urna sollicitudin, dictum sapien sit amet, rutrum metus. Donec sed risus neque. Ut a orci ex. Morbi laoreet suscipit tortor at ullamcorper.eu blandit ex hendrerit eget. In non convallis eros. Maecenas consectetur neque a nibh faucibus blandit. Pellentesque malesuada lectus augue, eu blandit ex hendrerit eget. In non convallis eros. Maecenas consectetur neque a nibh faucibus blandit.",
//   "Tri-slider/scale showing the percentage of deaths broken down among the groups in each category (gender, age, and race). Also, it’s possible to add in the comparison to all deaths chart they have for each element in the QR."
// ]
var Paragraph = React.createClass({
  propTypes: {  //propTypes and React.PropTypes have diff capitalizations
    paragraphs:     React.PropTypes.array.isRequired
  },
  render: function(){
    const obj = this.props.paragraphs[this.props.index];
    var paragraphList = obj.paragraphs.map((para,i) => <p key={"para_" + i}>{para}</p>);
        console.log(paragraphList);
      return(
          <section className="ma__rich-text js-ma-rich-text">
            {paragraphList}
          </section>
      )
  }
});

module.exports = Paragraph;
