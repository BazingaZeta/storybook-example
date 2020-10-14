import React from 'react'

import Counter from '../Counter'
import Random from '../Random'

import Header from '../Header/Header'

import classes from './App.module.css'

const App = () => (
  <>
    <Header title="Let's click some buttons" subtitle="Who doesn't love buttons?" />
    <div className={classes.container}>
      <Counter />
      <Random />
    </div>
  </>
)

export default App
