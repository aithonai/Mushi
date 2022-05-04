import styled, { css } from "styled-components"
import * as theme from "../Theme"

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Form = styled.form`
	display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  font-family: ${theme.font.primary};
  background-color: ${theme.color.white};
  border-right: 0px solid #e6e6e6;
  padding-bottom: 1rem;
  min-height: calc(100vh - 4rem);
`

export const Title = styled.header`
	padding: 1rem 0;
  width: 100%;
  font-family: ${theme.font.primary};
  font-size: ${theme.font.size.sectionTitle};
  font-weight: bold;
  text-align: center;
`

export const Inputs = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & label {
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 5px;
    color: #646464;
  }

  @media screen and (${theme.breakpoint.mobile.width}) {
    width: 100%;
  }
`

export const JoinInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media screen and (${theme.breakpoint.mobile.width}) {
    & {
      flex-direction: column;
    }
  }

  @media screen and (${theme.breakpoint.desktop.width}) {
    & > div {
      display: flex;
      flex-direction: column;
    }

    & > div:first-child {
      margin-right: 0.5rem;
    }

    & > div:last-child {
      margin-left: 0.5rem;
    }
  }
`

export const InputStyle = css`
  width: calc(100% - 0.6rem*2);
  height: 2.5rem;
  font-family: ${theme.font.primary};
  background-color: #e7e7e7;
  border-radius: 5px;
  border: none;
  outline-color: transparent;
  outline-width: 10px;
  padding: 0 0.6rem;
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  transition: all 0.4s ease;

  @media screen and (${theme.breakpoint.desktop.width}) {
    &:active, &:focus {
      outline-color: ${theme.color.primary};
    }
  }

  @media screen and (${theme.breakpoint.mobile.width}) {
    &:active, &:focus, &:hover {
      outline-color: ${theme.color.primary};
    }
  }
`

export const Input = styled.input`
  ${InputStyle}
  
  @media screen and (${theme.breakpoint.mobile.width}) {
    height: 3rem;
  }
`

export const TextArea = styled.textarea`
  ${InputStyle}
  padding: 0.6rem;
  height: 5rem;
  resize: none;

  @media screen and (${theme.breakpoint.mobile.width}) {
    height: 6rem;
  }
`

export const Controls = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: calc(1rem - 10px);

  @media screen and (${theme.breakpoint.desktop.width}) {
    & div:first-child, button:first-child {
      margin-right: 0.5rem;
    }

    & button {
      padding: 0.6rem 0.8rem;
    }
  }

  @media screen and (${theme.breakpoint.mobile.width}) {
    & {
      flex-direction: column;
    }
  }
`

export const FormControls = styled.div`
  display: flex;

  @media screen and (${theme.breakpoint.mobile.width}) {
    & button {
      width: 100%;
    }

    & button:last-child {
      margin-right: 0.5rem;
    }

    ${Controls} > & {
      margin-top: 1rem;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }
`

export const CardPreview = styled.div`
  width: calc(100% - 2rem);
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 1rem;
  border-radius: 0.6rem;
  margin-bottom: 1rem;
  background-color: #f2f2f2;

  & > .card {
    width: 100%;
  }

  @media screen and (${theme.breakpoint.mobile.width}) {
    & {
      padding: 1rem;
    }
  }
`