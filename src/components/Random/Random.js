import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'

import { Wrapper, H1 } from '../typography'

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
    <Wrapper>
      <H1>{header}</H1>
      <Button disabled={isLoading} onClick={onClick} primary size="large" label={label} />
      {isPristine && <div>{actionLabel}</div>}
      {isLoading && <div>{loadingLabel}</div>}
      {isFulfilled && (
        <div>
          Retrieved: <tt>{number}</tt>
        </div>
      )}
      {hasError && <div>Error: Could not retrieve a random number</div>}
    </Wrapper>
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
