import styled from "styled-components"

export const NewLoader = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;

	${props => props.centered && `
		align-items: center;
		position: fixed;
		margin: auto auto;
		top: 0;
		bottom: 0;
	`}
`

export const Animation = styled.img`
	width: 6rem;
	height: 6rem;
`