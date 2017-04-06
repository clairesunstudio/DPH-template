import React from 'react'
import Search from './Search'
import NavLink from './NavLink'
import Logo from './Logo'

var TopNav = React.createClass({
  render: function(){
    return (
      <div>
              <header className="ma__header">
                <div className="ma__header__container">
                  <div className="ma__header__logo">
                    <Logo />
                  </div>
                  <div className="ma__header__search js-header-search-menu">
                    <Search {...this.props} />
                  </div>
                </div>
                <nav className="ma__header__nav" aria-labelledby="main_navigation">
                  <div className="ma__header__nav-container">
                    <div className="ma__header__main-nav">
                      <section className="ma__main-nav">
                      <ul>
                        <li className="ma__main-nav__item js-main-nav-toggle"><NavLink className="ma__main-nav__top-link" to="/">Home</NavLink></li>
                        <li className="ma__main-nav__item js-main-nav-toggle"><NavLink className="ma__main-nav__top-link" to="/repos/2017/3">Newest</NavLink></li>
                        <li className="ma__main-nav__item js-main-nav-toggle"><NavLink className="ma__main-nav__top-link" to="/repos/2017/2">Last Quarter</NavLink></li>
                      </ul>
                      </section>
                    </div>
                  </div>
                </nav>
              </header>
            </div>

    )

  }

})

module.exports = TopNav;