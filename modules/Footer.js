import React from 'react'
import SocialMedia from './SocialMedia'


var Footer = React.createClass({
  render: function(){
    return (
      <footer className="ma__footer js-footer" id="footer">
              <button className="ma__footer__back2top js-back2top is-hidden">
                <svg aria-hidden="true" id="SvgjsSvg1000" xlinkHref="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"  width={16} height={18} viewBox="0 0 16 18">
                  <defs id="SvgjsDefs1001" />
                  <path id="SvgjsPath1007" d="M983.721 1887.28L983.721 1887.28L986.423 1890L986.423 1890L986.423 1890L983.721 1892.72L983.721 1892.72L978.318 1898.17L975.617 1895.45L979.115 1891.92L971.443 1891.92L971.443 1888.0700000000002L979.103 1888.0700000000002L975.617 1884.5500000000002L978.318 1881.8300000000002Z " transform="matrix(1,0,0,1,-971,-1881)" />
                </svg> <span>Top</span>
              </button>
              <div className="ma__footer__container">
                <section className="ma__footer__info">
                  <div className="ma__footer__logo">
                    <img src="/assets/images/stateseal.png" alt="Massachusetts State Seal" width={120} height={120} />
                  </div>
                  {SocialMedia}
                  <div className="ma__footer__copyright">
                    <p><b>© 2016 Commonwealth of Massachusetts.</b></p>
                    <p>Mass.Gov® is a registered service mark of the Commonwealth of Massachusetts.</p>
                  </div>
                </section>
              </div>
            </footer>
    )

  }

})

module.exports = Footer;
