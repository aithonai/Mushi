import {
  ProductContent,
  Navigation,
  CloseButton,
  Header,
  ImageContainer,
  Image,
  CardSection,
  SectionTitle,
  Description,
  Container,
  Aside,
  Info,
  Informations,
  Title,
  Content,
} from "./CardModalStyles"

function mapImages(images) {
  return images.map(img => <Image src={img} key={img} alt={img} />)
}

function CardModal(props) {
  const { name, description, image, stock } = props
  const images = image instanceof Array && mapImages(image)

  return (
    <Container onClick={e => e.stopPropagation()}>
      <Aside>
        <Header>{name}</Header>
        <Informations>
          <Info>
            {props.category && <Content>{props.category}</Content>}
            <Title>Category</Title>
          </Info>
          <Info>
            {stock && <Content>{stock}</Content>}
            <Title>Stock</Title>
          </Info>
          <Info>
            {props.price && <Content>{"$" + props.price}</Content>}
            <Title>Price</Title>
          </Info>
        </Informations>
      </Aside>
      <ProductContent>
        <Navigation>
          <CloseButton onClick={props.close}></CloseButton>
        </Navigation>
        <ImageContainer imagesLength={image instanceof Array && image.length}>
          {images}
        </ImageContainer>
        <CardSection>
          <SectionTitle>Description</SectionTitle>
          <Description>{description}</Description>
        </CardSection>
      </ProductContent>
    </Container>
  )
}

export default CardModal
