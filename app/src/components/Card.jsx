import "./Card.scss"
import { useModal } from "../hooks/useModal"
import CardModal from "./CardModal"

export default function Card(props) {
  const {name, description, thumbnail} = props
  const [modalCard, openModalCard, closeModalCard] = useModal()

  return (
    <section className="card" onClick={openModalCard}> 
      <picture className="thumbnail">
        {thumbnail && thumbnail.length > 0 && <img src={thumbnail[0]} alt={name + "thumbnail"} />}
      </picture> 
      <div className="information">
        <span className="title">
          {name}
        </span>
        <span className="desc">{description}</span>
      </div>
      <CardModal {...props} isOpen={modalCard} closeModal={closeModalCard} />
    </section>
  )
}