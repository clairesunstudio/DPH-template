import React from 'react'

var Dropdown = React.createClass({
  propTypes: {  //propTypes and React.PropTypes have diff capitalizations
    placeholder:   React.PropTypes.string.isRequired,
  },
  render: function(){
    var myUrl = window.location.href
    myUrl = myUrl.substring(0,myUrl.lastIndexOf("/"))
    var arr = myUrl.split('/')
    var myRoot, subdir
    if (arr[3]!=="dphopioidqr"){
          subdir = ''
          myRoot = ''
          console.log("local");
    } else {
      subdir = arr[3] || ""
      myRoot = subdir + "/";
      console.log(myRoot)}



    return (
      <section {...this.props} className="ma__select-box">
             <label htmlFor="color-select" className="ma__select-box__label">View other quarterly reports</label>
             <div className="ma__select-box__field">
               <select className="ma__select-box__select">
                  <option value={`2017/3`}>Q3 2017</option>
                  <option value={`2017/2`}>Q2 2017</option>
                  <option value={`2017/1`}>Q1 2017</option>
                  <option value="older">Older</option>
               </select>
               <div className="ma__select-box__link">
                 <span>{this.props.placeholder}</span>
                 <span className="ma__select-box__icon" /></div>
             </div>
      </section>

    )

  }

})

module.exports = Dropdown;
