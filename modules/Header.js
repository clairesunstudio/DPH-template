import React from 'react';

var Header = React.createClass({

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
                            <p>The Massachusetts Department of Public Health collects overdose death data to track the progression of the opioid crisis and target services to especially hard-hit communities. The data in this report is updated quarterly.{this.props.subtitle}</p>
                          </section>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="ma__illustrated-header__image ma__illustrated-header__image--empty" />
        </header>
      )
  }
});

module.exports = Header;
