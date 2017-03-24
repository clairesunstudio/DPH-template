import React from 'react'
import axios from 'axios'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

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
            data_bar_all: [],
            data_bar_unintent: [],
            data_line_drug: [],
            data_line_ma: []
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
            axios.get('../../data/bar-unintent-death.json'),
            axios.get('../../data/line-drug-present.json'),
            axios.get('../../data/line-ma-unintent.json'),
        ])
          .then(axios.spread(function (result, bar_all, bar_unintent, line_drug, line_ma) {
            _this.setState({
                        content: result.data,
                        header: result.data.header,
                        title: result.data.header.title,
                        subtitle: result.data.header.subtitle,
                        paragraphs: result.data.body,
                        data_bar_all: bar_all.data,
                        data_bar_unintent: bar_unintent.data,
                        data_line_drug: line_drug.data,
                        data_line_ma: line_ma.data
            });
          }));
    },

    componentWillUnmount: function() {
        this.ignoreLastFetch = true
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
            data_bar_all,
            data_bar_unintent,
            data_line_drug,
            data_line_ma
        } = this.state;

        return (

          <div>
            <Header yr = {year} qr = {quarter} title = {title} subtitle = {subtitle}/>
            <Main content = {content} paragraphs = {paragraphs} data_bar_all = {data_bar_all} data_bar_unintent = {data_bar_unintent} data_line_drug = {data_line_drug} data_line_ma = {data_line_ma}/>
            <Footer />
            </div>
        )
    }
})
