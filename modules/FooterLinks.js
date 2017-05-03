import React from 'react'
import LinkGroup from './LinkGroup'
import Link from './Link'

var FooterLinks = React.createClass({
  render: function(){
    return (
      <section className="ma__footer-links">
        <LinkGroup>
            <Link text={'resource'} url={'#'}/>
            <Link text={'resource'} url={'#'}/>
            <Link text={'resource'} url={'#'}/>
            <Link text={'resource'} url={'#'}/>
        </LinkGroup>
        <LinkGroup>
            <Link text={'resource'} url={'#'}/>
            <Link text={'resource'} url={'#'}/>
            <Link text={'resource'} url={'#'}/>
            <Link text={'resource'} url={'#'}/>
        </LinkGroup>
        <LinkGroup>
            <Link text={'resource'} url={'#'}/>
            <Link text={'resource'} url={'#'}/>
            <Link text={'resource'} url={'#'}/>
            <Link text={'resource'} url={'#'}/>
        </LinkGroup>
      </section>
    )

  }

})

module.exports = FooterLinks;
