import React from 'react'

var GraphTitle = React.createClass({
  render: function(){
    const styles = {
        graphTitle: {
          fontSize: "1.2em",
          textAlign: "center",
          margin: "0 auto",
          margin: 10
        }
    };
      return(
            <h4 style={styles.graphTitle}>
              {this.props.children}
            </h4>
      )
  }
});

module.exports = GraphTitle;
