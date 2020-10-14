import React from 'react'
import { useActions, useRandomAPI } from '../../features/random'
import PureRandom from './Random'

const Random = () => {
  /**
   *  Get number, returned  from random.org, and the state of request from Redux store.
   */
  const { number, isLoading, hasError, isFulfilled } = useRandomAPI()

  /** Create incrementCounter action, using custom hook from feature */
  const { getNumber } = useActions()

  return (
    <PureRandom
      isLoading={isLoading}
      hasError={hasError}
      isFulfilled={isFulfilled}
      header="Random Number"
      number={number}
      actionLabel="Click the button to get random number"
      loadingLabel="Getting number"
      onClick={getNumber}
      label="Get random number"
    />
  )
}

export default Random
