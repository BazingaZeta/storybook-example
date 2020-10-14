import React from 'react'
import PropTypes from 'prop-types'
import './header.module.css'

const Header = ({ title, subtitle }) => (
  <header>
    <h1>{title}</h1>
    {subtitle && <h2>{subtitle}</h2>}
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

Header.defaultProps = {
  subtitle: null
}

export default Header
