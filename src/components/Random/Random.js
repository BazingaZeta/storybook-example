import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button/Button'

import classes from './Random.module.css'

const Random = ({
  isLoading,
  hasError,
  isFulfilled,
  number,
  onClick,
  header,
  label,
  actionLabel,
  loadingLabel
}) => {
  /** Define pristine state condition, when user didn't do any actions */
  const isPristine = !isLoading && !hasError && !isFulfilled

  return (
    <div className={classes.counter}>
      <h2 className={classes.header}>{header}</h2>
      <Button disabled={isLoading} onClick={onClick} primary size="large" label={label} />
      {isPristine && <div>{actionLabel}</div>}
      {isLoading && <div>{loadingLabel}</div>}
      {isFulfilled && (
        <div>
          Retrieved from random.org: <tt>{number}</tt>
        </div>
      )}
      {hasError && <div>Error: Could not retrieve a random number</div>}
    </div>
  )
}

Random.propTypes = {
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
  isFulfilled: PropTypes.bool,
  number: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  actionLabel: PropTypes.string.isRequired,
  loadingLabel: PropTypes.string.isRequired
}

Random.defaultProps = {
  isLoading: false,
  hasError: false,
  isFulfilled: false,
  number: null
}

export default Random
