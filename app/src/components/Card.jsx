import "../scss/Card.scss"

export default function Card({ thumbnail, image, name, description, stock }) {
  return (
    <div className="card">
      <div className="image">
        {thumbnail && <img src={thumbnail[0] || thumbnail } alt={name} />}
      </div>
      <div className="information">
        <a href="#__" className="title">
          {name}
        </a>
        <div className="details">
          <div className="stock">
            {stock > 0 && <span className="withStock">with stock</span>}
          </div>
        </div>
        <span className="desc">{description}</span>
      </div>
    </div>
  )
}
