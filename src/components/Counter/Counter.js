import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'

import { Wrapper, H1 } from '../typography'

const Counter = ({ onClick, label, header, count }) => (
  <Wrapper>
    <H1>{header}</H1>
    <Button onClick={onClick} primary size="large" label={label} />
    <div>
      Count: <tt>{count}</tt>
    </div>
  </Wrapper>
)

Counter.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
}

export default Counter
