import React from 'react'

import Counter from '../Counter'
import Random from '../Random'

import Header from '../Header'

import { Container } from './styles'

const App = () => (
  <>
    <Header title="Let's click some buttons" subtitle="Who doesn't love buttons?" />
    <Container>
      <Counter />
      <Random />
    </Container>
  </>
)

export default App
