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
            title: "",
            subtitle: "",
            content: {},
            header: "",
            paragraphs: [],
            bar: [],
            line: []
        }
    },


    componentDidMount: function() {
        this.fetchContent()
    },

    componentDidUpdate(prevProps) {
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


    fetchContent() {
        var _this = this;
        axios.all([
            axios.get('../../content/content_' + this.props.params.year + '_' + this.props.params.quarter + '.json'),
            axios.get('../../data/bar-all-death.json'),
            axios.get('../../data/line-drug-present.json')
        ])
          .then(axios.spread(function (result, bar, line) {
            console.log(line.data);
            _this.setState({
                        content: result.data,
                        header: result.data.header,
                        title: result.data.header.title,
                        subtitle: result.data.header.subtitle,
                        paragraphs: result.data.body,
                        bar: bar.data,
                        line: line.data
            });
          }));
    },

    componentWillUnmount: function() {
        this.ignoreLastFetch = true,
            this.serverRequest.abort()
    },

    render() {
        const {
            year,
            quarter,
            title,
            subtitle,
            content,
            header,
            paragraphs,
            bar,
            line
        } = this.state;

        return (

          <div>
            <Header yr = {year} qr = {quarter} title = {title} subtitle = {subtitle}/>
            <Main content = {content} paragraphs = {paragraphs} bar = {bar} line = {line}/>
            <Footer />
            </div>
        )
    }
})
