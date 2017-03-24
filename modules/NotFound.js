import React from 'react'
import NavLink from './NavLink'
import Search from './Search'
import Logo from './Logo'

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
      <main id="main-content" className="ma__narrow-template ma__narrow-template--right ma__narrow-template--yellow" tabIndex={-1}>
             <header className="ma__narrow-template__header">
                <Logo />
             </header>
             <div className="ma__narrow-template__container">
               <div className="ma__narrow-template__content">
                 <section className="ma__error-page">
                   <div className="ma__error-page__type">404</div>
                   <div className="ma__error-page__label">Oops</div>
                   <h1 className="ma__error-page__title"></h1>
                   <h2 className="ma__error-page__message">The report that you are looking for doesn&#39;t exist or you didn&#39;t enter the year and quarter correctly. Please try again.</h2>
                 </section>

                 <Search onSubmit={this.handleSubmit}/>

                 <section className="ma__helpful-links ">
                   <h3 className="ma__comp-heading ma__comp-heading--yellow ">
                     Helpful Links
                   </h3>
                   <ul className="ma__helpful-links__items">
                    <li className="ma__helpful-links__item"><NavLink className="ma__content-link ma__content-link--chevron" to="/">Home</NavLink></li>
                     <li className="ma__helpful-links__item"><NavLink className="ma__content-link ma__content-link--chevron" to="/repos/2017/3">Newest Report</NavLink></li>
                     <li className="ma__helpful-links__item"><NavLink className="ma__content-link ma__content-link--chevron" to="/repos/2017/2">Last Quarter</NavLink></li>
                   </ul>
                 </section>  </div>
             </div>
        </main>
    )
  }
})
