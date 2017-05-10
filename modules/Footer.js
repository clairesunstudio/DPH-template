import React from 'react'
import SocialMedia from './SocialMedia'
import Logo from './Logo'
import FooterLinks from './FooterLinks'

var Footer = React.createClass({
  render: function(){
    return (
        <footer className="ma__footer js-footer" id="footer">
          <div className="ma__footer__container">
            <div className="ma__footer__nav">
              <FooterLinks>
                {this.props.children}
              </FooterLinks>
            </div>
            <section className="ma__footer__info">
              <Logo class={"ma__footer__logo"} width={120} height={120}/>
              <SocialMedia />
              <div className="ma__footer__copyright">
                <p><b>© 2016 Commonwealth of Massachusetts.</b></p>
                <p>Mass.Gov® is a registered service mark of the Commonwealth of Massachusetts.</p>
              </div>
            </section>
          </div>
          <button className="ma__footer__back2top js-back2top is-hidden">
            <svg aria-hidden="true" id="SvgjsSvg1000" xlinkHref="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"  width={16} height={18} viewBox="0 0 16 18">
              <defs id="SvgjsDefs1001" />
              <path id="SvgjsPath1007" d="M983.721 1887.28L983.721 1887.28L986.423 1890L986.423 1890L986.423 1890L983.721 1892.72L983.721 1892.72L978.318 1898.17L975.617 1895.45L979.115 1891.92L971.443 1891.92L971.443 1888.0700000000002L979.103 1888.0700000000002L975.617 1884.5500000000002L978.318 1881.8300000000002Z " transform="matrix(1,0,0,1,-971,-1881)" />
            </svg> <span>Top</span>
          </button>
        </footer>
    )
  },
  componentDidMount(){
    let $footer = $('.js-footer'),
        visibleThreshold = 250,
        staticThreshold = 50;

    $(".js-back2top").each(function() {
      let $el = $(this);

      $el.on('click',function(e) {
        e.preventDefault();
        try {
          $("html, body").stop(true,true).animate({scrollTop:0}, '750');
        }
        catch(e) {
          $('body').scrollTop(0);
        }
        return false;
      });

      $(window).on('scroll', function() {
        // if we've exceeded the threshold of scrolling
        // from the top, show control
        let scrollTop = $(window).scrollTop();

        if (scrollTop > visibleThreshold) {
            $el.removeClass('is-hidden');
        } else {
            $el.addClass('is-hidden');
        }
      });
    });

  },

})

module.exports = Footer;
