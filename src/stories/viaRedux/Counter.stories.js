import React from 'react'

import Counter from 'components/Counter'

export default {
  title: 'Active/Counter',
  component: Counter,
  argTypes: {}
}

const Template = args => <Counter {...args} />

export const Via_Redux = Template.bind({})
Via_Redux.args = {}
