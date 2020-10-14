import React from 'react'
import { useCountValue, useActions } from '../../features/counter'
import PureCounter from './Counter'

const Counter = () => {
  /**
   *  Get count value from Redux store. We defined selector
   *  (state => state.counter.value) inside counter feature folder,
   *  to make component global state agnostic
   */
  const count = useCountValue()

  /** Create incrementCounter action, using custom hook from feature */
  const { incrementCounter } = useActions()

  return (
    <PureCounter
      header="Counter"
      count={count}
      label="Increment by one"
      onClick={incrementCounter}
    />
  )
}

export default Counter
