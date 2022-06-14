import styled from "styled-components"
import * as theme from "./Theme"

export const Modal = styled.div`
  display: ${props => (props.active ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 900;
`

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.color.black};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  cursor: auto;
  font-family: Inter;
  ${props => props.active && `animation: appear 0.2s ease-in-out forwards;`}

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const Body = styled.div`
  background-color: ${theme.color.white};
  border-radius: 0.8rem;
  box-shadow: 0px 30px 60px rgb(0 0 0 / 12%);
  max-height: 95%;
  max-width: 95%;
  overflow-y: hidden;
`
