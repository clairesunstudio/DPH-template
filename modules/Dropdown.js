import React from 'react'

var Search = React.createClass({
  propTypes: {  //propTypes and React.PropTypes have diff capitalizations
    placeholder:   React.PropTypes.string.isRequired,
  },
  render: function(){
    return (
      <section {...this.props} className="ma__select-box">
             <label htmlFor="color-select" className="ma__select-box__label">View other quarterly reports</label>
             <div className="ma__select-box__field">
               <select className="ma__select-box__select">
                  <option value="/2017/3">Q3 2017</option>
                  <option value="/2017/2">Q2 2017</option>
                  <option value="/2017/1">Q1 2017</option>
               </select>
               <div className="ma__select-box__link">
                 <span>{this.props.placeholder}</span>
                 <span className="ma__select-box__icon" /></div>
             </div>
      </section>

    )

  }

})

module.exports = Search;
