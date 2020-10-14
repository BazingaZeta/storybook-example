import styled from 'styled-components'

const HEADING_FONT_FAMILY = "'Helvetica Neue', Arial, sans-serif"

export const Wrapper = styled.div`
  border: 1px solid lightgray;
  margin: 1rem;
  padding: 0.5rem;
  text-align: center;
  width: 15rem;
`

export const H1 = styled.h1`
  font-family: ${HEADING_FONT_FAMILY};
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.5rem 0;
`

export const H2 = styled.h2`
  font-family: ${HEADING_FONT_FAMILY};
  font-size: 1.35rem;
  font-weight: normal;
  margin: 0.3rem 0;
`
