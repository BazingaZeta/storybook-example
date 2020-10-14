import React from 'react'

import Random from 'components/Random'

export default {
  title: 'Components/Random',
  component: Random,
  argTypes: {}
}

const Template = args => <Random {...args} />

export const Default = Template.bind({})
Default.args = {}
