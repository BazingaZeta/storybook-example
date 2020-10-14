import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, H1, H2 } from './styles'

const Header = ({ title, subtitle }) => (
  <Wrapper>
    <H1>{title}</H1>
    {subtitle && <H2>{subtitle}</H2>}
  </Wrapper>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

Header.defaultProps = {
  subtitle: null
}

export default Header
