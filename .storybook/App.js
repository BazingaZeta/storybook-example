import React from 'react'
import classes from 'components/App/App.module.css'

const App = ({ children }) => (
  <div className={classes.container}>{children}</div>
)

export default App
