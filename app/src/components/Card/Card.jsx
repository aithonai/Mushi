import {
  Container,
  Thumbnail,
  Information,
  Title,
  Description,
  Price,
} from "./CardStyles"
import { useModal } from "../../hooks/useModal"
import Modal from "../Modal"
import CardModal from "./CardModal"

export default function CardContainer(props) {
  const { name, description, thumbnail, price } = props
  const [active, open, close] = useModal()
  
  return (
    <>
      <Container onClick={open}>
        <Thumbnail>
          {thumbnail && thumbnail.length > 0 && (
            <img src={thumbnail[0]} alt={name + "thumbnail"} />
          )}
        </Thumbnail>
        <Information>
          <div>
            <Title>{name}</Title>
            <Description>{description}</Description>
          </div>
          <div>
            <Price>{price && "$" + price}</Price>
          </div>
        </Information>
      </Container>
      <Modal {...props} active={active} close={close}>
        <CardModal {...props} close={close}/>
      </Modal>
    </>
  )
}
