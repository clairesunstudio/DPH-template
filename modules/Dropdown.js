import React from 'react'

var Search = React.createClass({

  render: function(){
    var dropdownMenu = document.querySelectorAll(".js-dropdown");

    if (null !== dropdownMenu) {

      var _length = dropdownMenu.length;

      var _loop = function (i) {
        var parentEl = dropdownMenu[i],
            selectEl = parentEl.querySelector(".js-dropdown-select"),
            link = parentEl.querySelector(".js-dropdown-link");

        if (null === selectEl || null === link) {
          return "break";
        }

        selectEl.onchange = function () {
          var elem = typeof this.selectedIndex === "undefined" ? window.event.srcElement : this;
          link.innerText = elem.text || elem.options[elem.selectedIndex].text;
        };
      };

      for (var i = 0; i < _length; i++) {
        var _ret = _loop(i);

        if (_ret === "break") break;
      }
    };
    return (
      <section className="ma__select-box js-dropdown">
             <label htmlFor="color-select" className="ma__select-box__label">View other quarterly reports</label>
             <div className="ma__select-box__field">
               <select {...this.props} name="color-select" id="color-select" className="ma__select-box__select js-dropdown-select">
                  <option value="/2017/3">Q3 2017</option>
                  <option value="/2017/2">Q2 2017</option>
                  <option value="/2017/1">Q1 2017</option>
               </select>
               <div className="ma__select-box__link">
                 <span className="js-dropdown-link">Select a quarter</span>
                 <span className="ma__select-box__icon" /></div>
             </div>
      </section>

    )

  }

})

module.exports = Search;
