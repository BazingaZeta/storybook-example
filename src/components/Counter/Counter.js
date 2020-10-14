import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button/Button'

import classes from './Counter.module.css'

const Counter = ({ onClick, label, header, count }) => (
  <div className={classes.counter}>
    <h2 className={classes.header}>{header}</h2>
    <Button onClick={onClick} primary size="large" label={label} />
    <div>
      Total value: <strong>{count}</strong>
    </div>
  </div>
)

Counter.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
}

export default Counter
