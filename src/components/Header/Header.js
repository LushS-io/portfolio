import React from 'react'
import PropTypes from 'prop-types'
import NavBar from 'NavBar'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    {/* <div className="logo">
      <span className="icon fa-diamond"></span>
    </div> */}

  <NavBar/>

    <div className="content">
      <div className="inner">
        <h1>Troy Kirinhakone</h1>
        <p>Conversational AI Developer</p>
      </div>
    </div>

  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
