import React from 'react'
import NavLink from './NavLink'
import Search from './Search'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {
    event.preventDefault()
    const year = event.target.elements[0].value
    const quarter = event.target.elements[1].value
    const path = `/repos/${year}/${quarter}`
    this.context.router.push(path)
  },

  render() {
    return (
      <div>

      <main id="main-content" className="ma__narrow-template ma__narrow-template--left ma__narrow-template--green" tabIndex={-1}>
              <header className="ma__narrow-template__header">
                <div className="ma__site-logo">
                  <a href="/" title="Mass Gov home page">
                    <img src="/assets/images/stateseal.png" alt="Mass Gov" width={75} height={75} />
                  </a>
                </div>
              </header>
              <div className="ma__narrow-template__container ">
                <div className="ma__narrow-template__content">
                  <section className="ma__error-page">
                    <div className="ma__error-page__label" />
                    <h1>DPH Quarterly Report</h1>
                    <p>The Massachusetts Department of Public Health collects overdose death data to track the progression of the opioid crisis and target services to especially hard-hit communities. The data in this report is updated quarterly.</p>
                    <ul role="nav">
                      <li className="ma__main-nav__item js-main-nav-toggle"><NavLink className="ma__main-nav__top-link" to="/repos/2017/3">Newest Report</NavLink></li>
                      <li className="ma__main-nav__item js-main-nav-toggle"><NavLink className="ma__main-nav__top-link" to="/repos/2017/2">Last Quarter</NavLink></li>
                    </ul>

                    <Search onSubmit={this.handleSubmit}/>
                  </section>

                  </div>
              </div>
            </main>
      </div>
    )
  }
})
