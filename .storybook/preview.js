import decorator from './redux.decorator'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
}

export const decorators = [decorator]
