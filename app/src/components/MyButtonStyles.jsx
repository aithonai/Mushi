import styled, { css } from "styled-components"
import * as theme from "./Theme"

const ghostTheme = css`
  color: #000;
  background-color: #e7e7e7;
`

export const ButtonStyles = css`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  padding: 0.3rem 0.6rem;
  border-width: 0;
  border-radius: 8px;
  outline-width: 0;
  color: #fff;
  cursor: pointer;
  font-size: ${theme.font.size.button};
  font-family: ${theme.font.primary};
  font-weight: ${theme.font.weight.bold};
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 0 0 2px ${theme.color.primary};
    transition: all 0.2s;
  }

  &:disabled {
    color: #999;
    background-color: #777;
    cursor: wait;
    box-shadow: 0 0 0 2px ${theme.color.primary};
  }

  @media screen and (${theme.breakpoint.mobile.width}) {
    & {
      height: calc(3rem - 0.3rem*2);
      font-size: 1rem;
    }
  }
`

export const BrandButton = styled.button`
  ${ButtonStyles}
  ${props => props.theme === 'ghost' && ghostTheme}
`

export const BrandDivButton = styled.div`
  ${ButtonStyles}
  ${props => props.theme === 'ghost' && ghostTheme}
`