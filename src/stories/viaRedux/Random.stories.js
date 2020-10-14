import React from 'react'

import Random from 'components/Random'

export default {
  title: 'Active/Random',
  component: Random,
  argTypes: {}
}

const Template = args => <Random {...args} />

export const Via_Redux = Template.bind({})
Via_Redux.args = {}
