import React from 'react'

import withReduxFeatures from 'withReduxFeatures'

import App from './App'

const WrappedApp = withReduxFeatures(App)

const decorator = Story => (
  <WrappedApp>
    <Story />
  </WrappedApp>
)

export default decorator
