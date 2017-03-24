import React from 'react'
import NavLink from './NavLink'

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
              <div className="ma__narrow-template__container">
                <div className="ma__narrow-template__content">
                  <section className="ma__error-page">
                    <div className="ma__error-page__label" />
                    <h1 className="ma__error-page__title">DPH Quarterly Report</h1>
                    <h2 className="ma__error-page__message">The Massachusetts Department of Public Health collects overdose death data to track the progression of the opioid crisis and target services to especially hard-hit communities. The data in this report is updated quarterly.</h2>
                    <ul role="nav">
                      <li className="ma__main-nav__item js-main-nav-toggle"><NavLink className="ma__main-nav__top-link" to="/" onlyActiveOnIndex>Home</NavLink></li>
                      <li className="ma__main-nav__item js-main-nav-toggle"><NavLink className="ma__main-nav__top-link" to="/repos/2017/3">Newest Report</NavLink></li>
                      <li className="ma__main-nav__item js-main-nav-toggle"><NavLink className="ma__main-nav__top-link" to="/repos/2017/2">Last Quarter</NavLink></li>
                    </ul>
                    <form onSubmit={this.handleSubmit}>
                      <input type="number" min="2016" max="2017" placeholder="year"/> / {' '}
                      <input type="number" min="1" max="4" placeholder="quarter"/>{' '}
                      <button className="ma__button-alt ma__button-alt--small" type="submit">View</button>
                    </form>
                  </section>

                  </div>
              </div>
            </main>
      </div>
    )
  }
})
