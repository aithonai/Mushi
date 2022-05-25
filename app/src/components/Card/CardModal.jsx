import {
  ProductContent,
  ImageContainer,
  Image,
  CardSection,
  SectionTitle,
  Description,
  Container,
  Aside,
  Info,
  Title,
  Content
} from "./CardModalStyles"
import Modal from "../Modal"

function mapImages(images) {
  return images.map(img => <Image src={img} key={img} alt={img} />)
}

function CardModal(props) {
  const { name, description, image, stock } = props
  const images = image instanceof Array && mapImages(image)

  return (
    <Modal title={name} isOpen={props.isOpen} closeModal={props.closeModal}>
      <Container>
        <Aside>
          <Info>
            <Title>Stock</Title>
            {stock && <Content>{stock}</Content>}
          </Info>
          <Info>
            <Title>Category</Title>
            {props.category && <Content>{props.category}</Content>}
          </Info>
        </Aside>
        <ProductContent>
          <ImageContainer imagesLength={image instanceof Array && image.length}>
            {images}
          </ImageContainer>
          <CardSection>
            <SectionTitle>Description</SectionTitle>
            <Description>{description}</Description>
          </CardSection>
        </ProductContent>
      </Container>
    </Modal>
  )
}

export default CardModal
