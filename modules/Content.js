import React from 'react'
import axios from 'axios'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Logo from './Logo'
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
            data_line_ma: [],
            list: null
        }
    },


    componentWillMount: function() {
            this.fetchContent();
            this.fetchList();
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
                    axios.get('../../data/_' + this.props.params.year + '_' + this.props.params.quarter +'/line-ma-unintent.json')
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

        fetchList() {
          var _this = this;
          axios.get('../../content/').then(function(files){
          _this.setState({list: files.data})
          })
        },
        printList(list) {
          var exist = [];
            for (var i=0; i<list.length; i++){
            var file = {};
            var filename = list[i].split(/[_.]/);
            file.year = filename[1];
            file.quarter = filename[2];
            exist.push(file);
          };
          return exist
        },

        containsContent(obj, list) {
          for (var i=0; i<list.length; i++) {
            if ((list[i].year === obj.year) && (list[i].quarter === obj.quarter)){
              return true;
            }
          }
          return false;
        },

        render() {
            const {list} = this.state;
            var input = this.props.params;
            var isExisted, isLoaded;
            if(list){isLoaded=true}else{isLoaded=false};
            if(isLoaded){
                console.log("isLoaded");
                var existed = this.printList(list);
                isExisted = this.containsContent(input, existed);
                if(isExisted) {
                  console.log("isExisted")
                  return this.renderContent()} else {return this.renderNotFound()}
              } else {return this.renderLoader()}
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

      renderNotFound() {
        return (
          <NotFound />
        )
      },

        renderLoader() {
          return (
            <Logo class={"ma__site-logo"} width={70} height={70}/>
          )
        }

})
