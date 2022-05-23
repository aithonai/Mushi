import styled from "styled-components"
import { ProductContent, ImageContainer, Image } from "./CardModalStyles"
import Modal from "../Modal"

function mapImages(images) {
  return images.map(img => <Image src={img} key={img} alt={img} />)
}

function CardModal(props) {
  const { name, description, image, stock } = props
  const images = image instanceof Array && mapImages(image)

  return (
    <Modal title={name} isOpen={props.isOpen} closeModal={props.closeModal}>
      <ProductContent>
        <ImageContainer imagesLength={image instanceof Array && image.length}>
          {images}
        </ImageContainer>
        <Stock>{stock}</Stock>
        <Info>{description}</Info>
      </ProductContent>
    </Modal>
  )
}

const Stock = styled.span``
const Info = styled.p``

export default CardModal
