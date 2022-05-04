import styled from "styled-components"
import Modal from "./Modal"

function CardModal (props) {
	const { name, description, image, stock } = props
	const images = image instanceof Array && image.map(img => <Image src={img} key={Math.random() + props.name} alt={`Image of ${props.name}`}/>)
	
	return (
		<Modal title={name} isOpen={props.isOpen} closeModal={props.closeModal}>
    	<ProductContent>
    		{
    			images.length > 0
    			? <MultipleImageContainer>{ images }</MultipleImageContainer>
    			: <ImageContainer>{ images }</ImageContainer>
    		}
      	<Stock>{stock}</Stock>
      	<Info>{description}</Info>
    	</ProductContent>
    </Modal>
	)
}

const ProductContent = styled.div`
	display: flex;
	flex-direction: column;
	overflow-y: auto;
`

const ImageContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
`

const MultipleImageContainer = styled(ImageContainer)`
	grid-template-columns: 1fr 1fr
`

const Image = styled.img`
	max-height: 25rem;
	border-radius: 0.4rem;
`
const Stock = styled.span``
const Info = styled.p``

export default CardModal