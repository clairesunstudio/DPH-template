import React from 'react';
import Search from './Search'

var Header = React.createClass({
  propTypes: {  //propTypes and React.PropTypes have diff capitalizations
    qr:   React.PropTypes.string.isRequired,
    yr:     React.PropTypes.string.isRequired,
    title:  React.PropTypes.string.isRequired,   //boollean is abbrev.
    subtitle:     React.PropTypes.string.isRequired
  },
  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {
    event.preventDefault()
    const year = event.target.elements[0].value
    const quarter = event.target.elements[1].value
    const path = `/${year}/${quarter}`
    this.context.router.push(path)
  },

  render: function(){

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
                        <Search onSubmit={this.handleSubmit} />
                    </section>
                  </div>
                </div>
                <div className="ma__illustrated-header__image ma__illustrated-header__image--empty" />
        </header>
      )
  }
});

module.exports = Header;
