import React from 'react'
import NavLink from './NavLink'
import Logo from './Logo'
import Dropdown from './Dropdown'

export default React.createClass({
  getInitialState: function() {
      return {
          placeholder: "Select a quarter",
      }
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  handleChange(event) {
    const _this = event.target
    const serial = _this.value
    const text = _this[_this.selectedIndex].text
    this.setState({placeholder: text})
    this.context.router.push(serial)
  },
  render() {
    const {placeholder} = this.state;
    return (
      <main id="main-content" className="ma__narrow-template ma__narrow-template--right ma__narrow-template--yellow" tabIndex={-1}>
             <header className="ma__narrow-template__header">
                <Logo class={"ma__site-logo"} width={70} height={70}/>
             </header>
             <div className="ma__narrow-template__container">
               <div className="ma__narrow-template__content">
                 <section className="ma__error-page">
                   <div className="ma__error-page__type">404</div>
                   <div className="ma__error-page__label">Oops</div>
                   <h1 className="ma__error-page__title"></h1>
                   <h2 className="ma__error-page__message">The report that you are looking for doesn&#39;t exist.</h2>
                   <Dropdown onChange={this.handleChange} placeholder = {placeholder} />
                 </section>

                 <section className="ma__helpful-links ">
                   <h3 className="ma__comp-heading ma__comp-heading--yellow ">
                     Helpful Links
                   </h3>

                   <ul className="ma__helpful-links__items">
                     <li className="ma__helpful-links__item"><NavLink className="ma__content-link ma__content-link--chevron" to="/2017/3">Newest Report</NavLink></li>
                     <li className="ma__helpful-links__item"><NavLink className="ma__content-link ma__content-link--chevron" to="/2017/2">Previous Quarter</NavLink></li>
                   </ul>
                 </section>  </div>
             </div>
        </main>
    )
  }
})
