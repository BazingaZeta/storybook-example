import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Random from './Random'

describe('components > Random > Pure', () => {
  const onClick = jest.fn()
  const header = 'some header'
  const label = 'some label'
  const number = 555
  const actionLabel = 'some actionLabel'
  const loadingLabel = 'some loadingLabel'

  /**
   * Provide table of values to run tests with
   * @see https://jestjs.io/docs/en/api#describeeachtablename-fn-timeout
   */
  describe.each`
    isLoading | hasError | isFulfilled
    ${false}  | ${false} | ${false}
    ${true}   | ${false} | ${false}
    ${false}  | ${true}  | ${false}
    ${false}  | ${false} | ${true}
  `('renders different store states', ({ isLoading, hasError, isFulfilled }) => {
    it(`when isLoading=${isLoading} && hasError=${hasError} && isFulfilled=${isFulfilled}`, () => {
      const { asFragment } = render(
        <Random
          isLoading={isLoading}
          hasError={hasError}
          isFulfilled={isFulfilled}
          header={header}
          number={number}
          actionLabel={actionLabel}
          loadingLabel={loadingLabel}
          onClick={onClick}
          label={label}
        />
      )

      /**
       * Basic snapshot test to check, if rendered component
       * matches expected footprint.
       */
      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe('on button click', () => {
    let component
    let button

    beforeAll(() => {
      component = render(
        <Random
          isFulfilled
          header={header}
          number={number}
          actionLabel={actionLabel}
          loadingLabel={loadingLabel}
          onClick={onClick}
          label={label}
        />
      )

      button = component.getByRole('button')
      fireEvent.click(button)
    })

    it('invoked the onClick handler', () => {
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })
})
