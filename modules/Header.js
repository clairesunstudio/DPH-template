import React from 'react';
import Dropdown from './Dropdown'

var Header = React.createClass({
  propTypes: {  //propTypes and React.PropTypes have diff capitalizations
    qr:   React.PropTypes.string.isRequired,
    yr:     React.PropTypes.string.isRequired,
    title:  React.PropTypes.string.isRequired,   //boollean is abbrev.
    subtitle:     React.PropTypes.string.isRequired
  },
  getInitialState: function() {
      return {
          placeholder: "Select a quarter",
      }
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  handleChange(event) {
    event.preventDefault()
    const _this = event.target
    const serial = _this.value
    if(serial==="older"){
      window.open('http://www.mass.gov/eohhs/gov/departments/dph/stop-addiction/current-statistics.html','_blank')
    }else{
      const text = _this[_this.selectedIndex].text
      this.setState({placeholder: text})
      this.context.router.push(serial)
    }
  },
  render: function(){
    const {placeholder} = this.state;
      return(
        <header className="ma__illustrated-header">
                <div className="ma__illustrated-header__container">
                  <div className="ma__illustrated-header__content">
                    <div className="ma__illustrated-header__category">
                      {"q"+this.props.qr+" "+this.props.yr}
                    </div>
                    <section className="ma__page-header">
                      <div className="ma__page-header__content" property="mainEntityOfPage">
                        <h1 className="ma__page-header__title">{this.props.title}</h1>
                        <div className="ma__page-header__intro">
                          <section className="ma__rich-text js-ma-rich-text">
                            <p>{this.props.subtitle}</p>
                          </section>
                        </div>
                      </div>
                        <br />
                        <Dropdown onChange={this.handleChange} placeholder = {placeholder} />
                    </section>
                  </div>
                </div>
                <div className="ma__illustrated-header__image ma__illustrated-header__image--empty" />
        </header>
      )
  }
});

module.exports = Header;
