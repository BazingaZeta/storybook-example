import React from 'react'
import PropTypes from 'prop-types'
import { Button as StyledButton } from './styles'

const Button = ({ disabled, primary, backgroundColor, size, label, ...props }) => (
  <StyledButton
    type="button"
    disabled={disabled}
    primary={primary}
    size={size}
    backgroundColor={backgroundColor}
    {...props}>
    {label}
  </StyledButton>
)

Button.propTypes = {
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  disabled: false,
  primary: false,
  backgroundColor: null,
  size: 'medium'
}

export default Button
