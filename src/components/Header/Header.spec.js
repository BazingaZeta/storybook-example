import React from 'react'
import { render } from '@testing-library/react'

import Header from '.'

describe('components > Header', () => {
  const title = 'some kind of title'

  let component

  describe('renders without subtitle', () => {
    beforeAll(() => {
      component = render(<Header title={title} />)
    })

    it('rendered without crashing', () => {
      expect(component.asFragment()).toMatchSnapshot()
    })
  })

  describe('renders with subtitle', () => {
    const subtitle = 'some kind of subtitle'

    beforeAll(() => {
      component = render(<Header title={title} subtitle={subtitle} />)
    })

    it('rendered without crashing', () => {
      expect(component.asFragment()).toMatchSnapshot()
    })
  })
})
