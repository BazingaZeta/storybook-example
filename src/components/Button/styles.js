import styled from 'styled-components'

const SIZES = {
  small: '0.85rem',
  medium: '1rem',
  large: '1.15rem'
}

const bgColor = ({ primary, backgroundColor }) =>
  backgroundColor || (primary ? '#1ea7fd' : '#2d35a7')

export const Button = styled.button`
  background-color: ${props => bgColor(props)};
  border: none;
  border-radius: 0.5rem;
  color: ${props => (props.primary ? '#fff' : 'lightgray')};
  box-shadow: ${props => (props.primary ? 'none' : 'inherit')};
  cursor: pointer;
  display: block;
  font-size: ${props => SIZES[props.size]};
  margin: 0 auto 1rem;
  padding: 1rem 2rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);

  &:disabled {
    background-color: lightgray;
    color: #fff;
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    left: 1px;
    position: relative;
    top: 1px;
  }
`
