import React from 'react'

import Counter from 'components/Counter/Counter'

export default {
  title: 'Components/Counter',
  component: Counter,
  argTypes: {
    header: { controls: 'text' },
    label: { controls: 'text' },
    count: { controls: 'number' }
  }
}

const Template = args => <Counter {...args} />

export const Simple = Template.bind({})
Simple.args = {
  header: 'A Counter',
  label: 'Increment',
  count: 3
}
