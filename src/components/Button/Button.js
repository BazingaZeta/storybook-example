import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

const Button = ({ disabled, primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'button--primary' : 'button--secondary'
  return (
    <button
      type="button"
      disabled={disabled}
      className={['button', `button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}>
      {label}
    </button>
  )
}

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
