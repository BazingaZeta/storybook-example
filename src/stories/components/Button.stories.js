import React from 'react'

import Button from 'components/Button/Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    primary: { controls: 'bool' },
    disabled: { controls: 'bool' },
    label: { controls: 'text' },
    size: { controls: { type: 'select', options: ['small', 'medium', 'large'] } },
    backgroundColor: { control: 'color' }
  }
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Click Me!'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Click Me!'
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  primary: true,
  label: "Don't Click Me!"
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Big Click Me!'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Little Click Me!'
}
