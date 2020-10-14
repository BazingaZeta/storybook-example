import styled from 'styled-components'
import { H1 as T1, H2 as T2 } from '../typography'

export const Wrapper = styled.header`
  display: flex;
  flex-flow: column;
  padding: 0.5rem 2rem;
  margin: 0 auto;
  width: 960px;
  background-color: #ebebeb;
`

const FONT_FAMILY = "'Courier New', Courier, monospace"

export const H1 = styled(T1)`
  font-family: ${FONT_FAMILY};
`

export const H2 = styled(T2)`
  font-family: ${FONT_FAMILY};
`
