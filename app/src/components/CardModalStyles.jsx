import styled from "styled-components"

export const ProductContent = styled.div`
	display: flex;
	flex-direction: column;
	overflow-y: auto;
`

export const ImageContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
`

export const MultipleImageContainer = styled(ImageContainer)`
	grid-template-columns: 1fr 1fr
`

export const Image = styled.img`
	max-height: 25rem;
	border-radius: 0.4rem;
`
export const Stock = styled.span``
export const Info = styled.p``