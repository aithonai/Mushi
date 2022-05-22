import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import * as theme from "./Theme"

export const MyNav = styled.div`
  display: flex;
  align-items: center;
  height: ${theme.nav.height};
  background-color: ${theme.color.white};
  border-bottom: 1px solid #f2f2f2;
  overflow: hidden;
  position: fixed;
  z-index: 900;
  top: 0;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: ${theme.nav.height};
  justify-content: space-between;
  padding: 0 1.5rem;
  width: 100%;

  @media screen and (${theme.breakpoint.mobile.width}) {
    padding: 0 0.5rem;
  }
`

export const Home = styled(Link)`
  width: 35px;
  height: calc(${theme.nav.height} - 1rem);
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`

export const Logo = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`

export const Search = styled.input`
  width: 24rem;
  height: calc(${theme.nav.height} - 1.02rem);
  padding: 0.2rem 1rem;
  background-color: ${theme.color.black};
  border-width: 0;
  outline-width: 0;
  border-radius: 6px;
  color: ${theme.color.white};
  font-family: ${theme.font.primary};
  transition: all 0.2s;

  &::placeholder {
    font-weight: ${theme.font.weight.bold};
    color: rgb(220, 220, 220);
  }

  &:focus {
    box-shadow: 0 0 2px 3px ${theme.color.primary};
    transition: all 0.2s;
  }

  @media screen and (${theme.breakpoint.mobile.width}) {
    width: 60%;
    height: 1.7rem;
  }
`

export const NavButtonStyles = css`
  display: flex;
  height: 1.5rem;
  color: ${theme.color.black};
  padding: 0.45rem 0.5rem;
  border-radius: 6px;
  outline-width: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  @media screen and (min-width: 800px) {
    &:hover {
      background-color: #f2f2f2;
      transition: background-color 0.4s ease;
    }

    &:active {
      color: rgb(145, 91, 255);
    }
  }

  @media screen and (max-width: 800px) {
    &:active {
      color: rgb(145, 91, 255);
      background-color: #f2f2f2;
      transition: background-color 0.4s ease;
    }
  }
`

export const OptionLink = styled(Link)`
  ${NavButtonStyles}
`
