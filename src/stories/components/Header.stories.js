import React from 'react'

import Header from 'components/Header/Header'

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    title: { controls: 'text' },
    subtitle: { controls: 'text' }
  }
}

const Template = args => <Header {...args} />

export const Short_no_Subtitle = Template.bind({})
Short_no_Subtitle.args = {
  title: 'A short title'
}

export const Short_with_Subtitle = Template.bind({})
Short_with_Subtitle.args = {
  title: 'A short title',
  subtitle: 'And a fabulous subtitle'
}

export const Long = Template.bind({})
Long.args = {
  title: 'Well goodness me that it a very long title. So long I am afraid it might never end.'
}
