import React from 'react'
import SidebarNav from './SidebarNav'
import Section from './Section'

var Main = React.createClass({

  render: function(){
      return(
        <main id="main-content" tabIndex={-1}>
          <div className="main-content main-content--two">
            <section className="ma__action-details">
              <div className="ma__action-details__content">
                <SidebarNav />
                <Section id="Overview" {...this.props} index={0} />
                <section className="ma__split-columns">
                  <div className="ma__split-columns__container">
                    <div className="ma__split-columns__column">
                      <figure className="ma__figure">
                        <img className="ma__image" alt="alt text" src="/assets/images/placeholder/400x300.png" height width />
                        <figcaption className="ma__figure__caption">
                        </figcaption>
                      </figure>
                    </div>
                    <div className="ma__split-columns__column">
                      <figure className="ma__figure">
                        <img className="ma__image" alt="alt text" src="/assets/images/placeholder/400x300.png" height width />
                        <figcaption className="ma__figure__caption">
                          <p><b>Percentage of Opioid-Related Deaths by Substance</b></p>
                          <p>Multi-line chart similar to what is in the quarterly report. Tooltip would have percentage totals for each quarter when you hover. </p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </section>
                <Section id="Geographic" {...this.props} index={1}/>
                <figure className="ma__figure align-left">
                  <img className="ma__image" alt="alt text" src="/assets/images/placeholder/400x300.png" height width />
                  <figcaption className="ma__figure__caption">
                    <p><b>XXXX Year-to-Date Deaths by County and Town</b></p>
                    <p>Tri-slider/scale showing the percentage of deaths broken down among the groups in each category (gender, age, and race). Also, it’s possible to add in the comparison to all deaths chart they have for each element in the QR.
                    </p>
                  </figcaption>
                </figure>
                <section className="ma__rich-text js-ma-rich-text">
                  <p><b>Deaths by County and Town</b></p>
                  <p>Suspendisse non tempus justo. Pellentesque malesuada lectus augue, eu blandit ex hendrerit eget. In non convallis eros. Maecenas consectetur neque a nibh faucibus blandit. In quis urna sollicitudin, dictum sapien sit amet, rutrum metus. Donec
                    sed risus neque. Ut a orci ex. Morbi laoreet suscipit tortor at ullamcorper.eu blandit ex hendrerit eget. In non convallis eros. Maecenas consectetur neque a nibh faucibus blandit. Pellentesque malesuada lectus augue, eu blandit ex hendrerit
                    eget. In non convallis eros. Maecenas consectetur neque a nibh faucibus blandit.</p>
                </section>
                <Section id="Demographics" {...this.props} index={2}/>
                <figure className="ma__figure align-right">
                  <img className="ma__image" alt="alt text" src="/assets/images/placeholder/400x300.png" height width />
                  <figcaption className="ma__figure__caption">
                    <p><b>XXXX Year-to-Date Deaths by Age, Gender, and Race</b></p>
                    <p>Tri-slider/scale showing the percentage of deaths broken down among the groups in each category (gender, age, and race). Also, it’s possible to add in the comparison to all deaths chart they have for each element in the QR.
                    </p>
                  </figcaption>
                </figure>
                <section className="ma__rich-text js-ma-rich-text">
                  <p><b>Demographic Data</b></p>
                  <p>Suspendisse non tempus justo. Pellentesque malesuada lectus augue, eu blandit ex hendrerit eget. In non convallis eros. Maecenas consectetur neque a nibh faucibus blandit. In quis urna sollicitudin, dictum sapien sit amet, rutrum metus. Donec
                    sed risus neque. Ut a orci ex. Morbi laoreet suscipit tortor at ullamcorper. eu blandit ex hendrerit eget. In non convallis eros. Maecenas consectetur neque a nibh faucibus blandit. Pellentesque malesuada lectus augue, eu blandit ex hendrerit
                    eget. In non convallis eros. Maecenas consectetur neque a nibh faucibus blandit.</p>
                </section>
                <Section id="Prescription" {...this.props} index={3}/>
                <figure className="ma__figure">
                  <img className="ma__image" alt="alt text" src="/assets/images/placeholder/800x400.png" height width />
                  <figcaption className="ma__figure__caption">
                    <p><b>Percent of People Receiving an Opioid Prescription by County</b></p>
                    <p>County heat map with the percentages. Tooltip would have numeric value when you hover. There’s a lot of other info in that table that could be put into a sidebar and would be active if you click or search for a county (it could default to
                      the state totals at first). Could be similar to the format for the other map. </p>
                  </figcaption>
                </figure>
                <Section id="Emergency" {...this.props} index={4}/>
              </div>
              <div className="post-content">
                <section className="ma__breadcrumbs ma__breadcrumbs--light">
                  <nav className="ma__breadcrumbs__container">
                    <div className="ma__breadcrumbs__label">
                      More in:
                    </div>
                    <ol className="ma__breadcrumbs__items">
                      <li className="ma__breadcrumbs__item"><a href="/">Home</a></li>
                      <li className="ma__breadcrumbs__item"><a href="#">Southbridge RMV</a></li>
                    </ol>
                  </nav>
                </section>
              </div>
            </section></div></main>
      )
  }
});

module.exports = Main;
