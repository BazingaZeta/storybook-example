import React from 'react'

import Random from 'components/Random/Random'

export default {
  title: 'Components/Random',
  component: Random,
  argTypes: {
    isLoading: { controls: 'bool' },
    hasError: { controls: 'bool' },
    isFulfilled: { controls: 'bool' },
    number: { controls: 'number' },
    header: { controls: 'text' },
    label: { controls: 'text' },
    actionLabel: { controls: 'text' },
    loadingLabel: { controls: 'text' }
  }
}

const Template = args => <Random {...args} />

export const Loaded_a_Number = Template.bind({})
Loaded_a_Number.args = {
  isFulfilled: true,
  number: 555,
  header: 'Random Number',
  label: 'Get random number',
  actionLabel: 'Click the button to get random number',
  loadingLabel: 'Getting number'
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
  header: 'Random Number',
  label: 'Get random number',
  actionLabel: 'Click the button to get random number',
  loadingLabel: 'Getting number'
}

export const Has_Error = Template.bind({})
Has_Error.args = {
  hasError: true,
  header: 'Random Number',
  label: 'Get random number',
  actionLabel: 'Click the button to get random number',
  loadingLabel: 'Getting number'
}
