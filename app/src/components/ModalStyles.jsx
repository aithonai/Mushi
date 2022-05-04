import styled from "styled-components"

export const ModalContainer = styled.section`
	position: fixed;
	display: ${props => props.isOpen ? 'flex' : 'none'};
	align-items: center;
	justify-content: center;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 999;
	cursor: auto;
	font-family: Inter;
	background-color: rgba(0,0,0,.75);
  ${props => (
  	props.isOpen
  	? 'opacity: 1; pointer-events: visible;'
  	: 'opacity: 0; pointer-events: none;'
  )}
  transition: all 0.5s ease-in-out;
`
const contentMargin = '2rem'
export const Content = styled.div`
	min-width: calc(100% - ${contentMargin});
	max-width: calc(100% - ${contentMargin});
	max-height: calc(100% - ${contentMargin});
	height: 100%;
	margin: ${contentMargin};
	color: black;
	background-color: white;
	border-radius: 0.8rem;
`

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
`

export const Title = styled.p`
	all: unset;
	font-size: 1.5rem;
	color: #222;
	font-weight: bold;
`

export const Body = styled.section`
	padding: 1rem;
	border-top: 1px solid #f2f2f2;
`

export const CloseButton = styled.div`
	display: flex;
	align-items: center;
	padding: 0.3rem 0.5rem;
	border-width: 0;
	border-radius: 8px;
	background-color: transparent;
	transition: all 0.2s ease;

	&:hover, &:active, &:focus {
		cursor: pointer;
		background-color: #f2f2f2;
   	transition: background-color 0.4s ease;
	}
`