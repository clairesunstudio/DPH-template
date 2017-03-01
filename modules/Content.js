import React from 'react'
import axios from 'axios'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

// import Footer from './footer'
//var json = Request.get('../public/data/data_1.json');

export default React.createClass({
  getInitialState: function() {
    return {
      year: this.props.params.year,
      quarter: this.props.params.quarter,
      title: [],
      paragraph: []
    }
  },


componentDidMount: function() {
  this.fetchContent()
},

componentDidUpdate (prevProps) {
  // respond to parameter change in scenario 3
  let oldId = prevProps.params
  let newId = this.props.params
  if (newId !== oldId)
    this.fetchContent(),
    this.setState({
    year: this.props.params.year,
    quarter: this.props.params.quarter
    });
},

fetchContent(){
  // var { year, quarter } = this.props.params;
  var _this = this;
  this.serverRequest =
    axios
      .get('../../content/content_'+this.props.params.year+'_'+this.props.params.quarter+'.json')
      .then(function(result) {
          _this.setState({
            title: result.data[0].title,
            paragraph: result.data[0].paragraph
          });
      }) // chain api calls to obtain ALL data needed
},

componentWillUnmount: function() {
  this.ignoreLastFetch = true,
  this.serverRequest.abort()
},

  render() {
    var {year, quarter, title, paragraph} = this.state;
    //const { year, quarter } = this.props.params;
    return (

<div>
<Header yr={year} qr={quarter} title={title} subtitle={paragraph}/>
<Main paragraph={paragraph}/>
<Footer />
</div>
    )
  }
})
