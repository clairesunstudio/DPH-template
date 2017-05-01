 import React from 'react'
import axios from 'axios'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import NotFound from './NotFound'

export default React.createClass({
    getInitialState: function() {
        return {
            title: null,
            subtitle: null,
            content: null,
            header: null,
            paragraphs: null,
            data_bar_all: [],
            data_bar_unintent: [],
            data_line_drug: [],
            data_line_ma: []
        }
    },


    componentWillMount: function() {
            this.fetchContent()
        },

        componentDidUpdate(prevProps) {
            let oldId = prevProps.params
            let newId = this.props.params
            if (newId !== oldId)
            this.fetchContent()
        },

        fetchContent() {
            var _this = this;
            axios.all([
                    axios.get('../../content/content_' + this.props.params.year + '_' + this.props.params.quarter + '.json'),
                    axios.get('../../data/_' + this.props.params.year + '_' + this.props.params.quarter +'/bar-all-death.json'),
                    axios.get('../../data/_' + this.props.params.year + '_' + this.props.params.quarter +'/bar-unintent-death.json'),
                    axios.get('../../data/_' + this.props.params.year + '_' + this.props.params.quarter +'/line-drug-present.json'),
                    axios.get('../../data/_' + this.props.params.year + '_' + this.props.params.quarter +'/line-ma-unintent.json'),
                ])
                .then(axios.spread(function(result, bar_all, bar_unintent, line_drug, line_ma) {
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
                }))
                .catch((error) => {console.log(error)})

        },

        componentWillUnmount: function() {
            this.ignoreLastFetch = true
        },

        render() {
            const {paragraphs} = this.state;
            return (paragraphs) ? this.renderContent() : this.renderLoader();
        },

        renderContent() {
            const {
                year,
                quarter
            } = this.props.params;
            const {
                title,
                subtitle
            } = this.state;
            console.log(this.state.paragraphs);
            return (
              <div>
                <Header yr = {year} qr = {quarter} title = {title} subtitle = {subtitle}/>
                <Main {...this.state}/>
                <Footer />
              </div>
            )
      },

        renderLoader() {
          return (
            <NotFound />
          )
        }

})
