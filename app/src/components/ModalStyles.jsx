import styled from "styled-components"
import * as theme from "./Theme"

export const ModalContainer = styled.section`
  position: fixed;
  display: ${props => (props.isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: hidden;
  z-index: 999;
  cursor: auto;
  font-family: Inter;
  background-color: rgba(0, 0, 0, 0.75);
  ${props => props.isOpen && `animation: appear 0.2s ease-in-out forwards;`}

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      pointer-events: visible;
    }
  }
`

export const Body = styled.section`
  max-width: 100%;
  max-height: 100%;
  color: ${theme.color.black};
  background-color: ${theme.color.white};
  border-radius: 0.8rem;
  overflow-y: auto;
  border-top: 1px solid #f2f2f2;
`
