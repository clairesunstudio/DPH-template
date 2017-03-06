import React from 'react';


var Section = React.createClass({
  propTypes: {  //propTypes and React.PropTypes have diff capitalizations
    id:   React.PropTypes.string.isRequired,
    paragraph:     React.PropTypes.array.isRequired
  },
  render: function(){
    var obj = this.props.paragraph;
    console.log(typeof(obj));
    //var paragraphs = this.props.paragraph[this.props.index];
    //console.log(paragraphs);
    //var arr = Object.keys(obj).map(key => obj[key])
    // Object.keys(obj).map(key => obj[key])
    var paragraphList = this.props.paragraph.map((para,i) => <p key={"para_" + i}>{para.paragraph}</p>);


      return(
        <div>
          <h3 className="ma__comp-heading  " id={this.props.id.toLowerCase()}>
            {this.props.id}
          </h3>
          <section className="ma__rich-text js-ma-rich-text">
            {paragraphList}
          </section>
        </div>
      )
  }
});

module.exports = Section;
