import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Counter from './Counter'

describe('components > Counter > Counter', () => {
  const onClick = jest.fn()
  const header = 'some header'
  const label = 'plus me up!'
  const count = 3

  let component
  let button

  beforeAll(() => {
    component = render(<Counter onClick={onClick} header={header} label={label} count={count} />)
    button = component.getByRole('button')
    fireEvent.click(button)
  })

  it('rendered without crashing', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })

  it('passed click on to onClick', () => {
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
