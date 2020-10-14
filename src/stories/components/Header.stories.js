import React from 'react'

import Header from 'components/Header/Header'

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    title: { controls: 'text' }
  }
}

const Template = args => <Header {...args} />

export const Short = Template.bind({})
Short.args = {
  title: 'A short title'
}

export const Long = Template.bind({})
Long.args = {
  title: 'Well goodness me that it a very long title. So long I am afraid it might never end.'
}
