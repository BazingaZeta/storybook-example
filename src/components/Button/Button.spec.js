import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Button from '.'

describe('components > Button', () => {
  const onClick = jest.fn()
  const label = 'plus me up!'

  let component

  describe.each`
    primary  | size        | disabled
    ${true}  | ${'small'}  | ${true}
    ${true}  | ${'small'}  | ${false}
    ${true}  | ${'medium'} | ${true}
    ${true}  | ${'medium'} | ${false}
    ${true}  | ${'large'}  | ${true}
    ${true}  | ${'large'}  | ${false}
    ${false} | ${'small'}  | ${true}
    ${false} | ${'small'}  | ${false}
    ${false} | ${'medium'} | ${true}
    ${false} | ${'medium'} | ${false}
    ${false} | ${'large'}  | ${true}
    ${false} | ${'large'}  | ${false}
  `('renders', ({ primary, size, disabled }) => {
    beforeAll(() => {
      component = render(
        <Button primary={primary} size={size} disabled={disabled} onClick={onClick} label={label} />
      )
    })

    it('rendered without crashing', () => {
      expect(component.asFragment()).toMatchSnapshot()
    })
  })

  describe('clicking on it', () => {
    let button

    beforeAll(() => {
      component = render(<Button onClick={onClick} label={label} />)
      button = component.getByRole('button')
      fireEvent.click(button)
    })

    it('passed click on to onClick', () => {
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })
})
