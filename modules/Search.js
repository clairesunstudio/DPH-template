import React from 'react'

var Search = React.createClass({
  render: function(){
    return (
        <section className="ma__header-search">
        <form {...this.props} className="ma__form js-header-search-form">
        <span className="ma__header-search__input">
          <input type="number" min="2016" max="2017" placeholder="year"/> / {' '}
          <input type="number" min="1" max="4" placeholder="quarter"/>{' '}
        </span>
        <button type="submit" className="ma__button-search">
            <span>View </span>
            <svg id="SvgjsSvg39" xlinkHref="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"  width={25} height={25} viewBox="0 0 25 25">
            <defs id="SvgjsDefs1039"></defs>
            <path id="SvgjsPath1040" d="M1424.99 107.4L1419.66 102.105C1420.44 100.884 1420.89 99.4383 1420.89 97.8892C1420.89 93.54 1417.3300000000002 90 1412.95 90C1408.57 90 1405.01 93.54 1405.01 97.89C1405.01 102.241 1408.57 105.781 1412.95 105.781C1414.43 105.781 1415.82 105.375 1417.01 104.67L1422.3799999999999 110ZM1407.97 97.89C1407.97 95.1625 1410.2 92.9416 1412.95 92.9416C1415.7 92.9416 1417.93 95.1617 1417.93 97.89C1417.93 100.619 1415.7 102.839 1412.95 102.839C1410.2 102.839 1407.97 100.619 1407.97 97.89Z " transform="matrix(1,0,0,1,-1405,-90)"></path>
            </svg>
        </button>
        </form>
        </section>

    )

  }

})

module.exports = Search;
