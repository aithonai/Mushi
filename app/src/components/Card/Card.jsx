import { NewCard, Thumbnail, Information, Title, Description } from "./CardStyles"
import { useModal } from "../../hooks/useModal"
import CardModal from "./CardModal"

export default function Card(props) {
  const {name, description, thumbnail} = props
  const [modalCard, openModalCard, closeModalCard] = useModal()

  return (
    <NewCard onClick={openModalCard}> 
      <Thumbnail>
        {thumbnail && thumbnail.length > 0 && <img src={thumbnail[0]} alt={name + "thumbnail"} />}
      </Thumbnail> 
      <Information>
        <Title>{name}</Title>
        <Description>{description}</Description>
      </Information>
      <CardModal {...props} isOpen={modalCard} closeModal={closeModalCard} />
    </NewCard>
  )
}