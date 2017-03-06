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
      subtitle: [],
      content: [],
      header: [],
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
        // var myObject = JSON.parse(result.data);
          _this.setState({
            content: result.data,
            header: result.data.header,
            title: result.data.header.title,
            subtitle: result.data.header.subtitle,
            paragraph: result.data.body
          });
      }) // chain api calls to obtain ALL data needed
},

componentWillUnmount: function() {
  this.ignoreLastFetch = true,
  this.serverRequest.abort()
},

  render() {
    var {year, quarter, title, subtitle, content, header, paragraph} = this.state;

    return (

<div>
<Header yr={year} qr={quarter} title={title} subtitle={subtitle}/>
<Main content={content} paragraph={paragraph}/>
<Footer />
</div>
    )
  }
})
