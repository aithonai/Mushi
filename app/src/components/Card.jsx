import "../scss/Card.scss"

export default function Card({ thumbnail, image, name, description, stock }) {
  return (
    <div className="card">
      <div className="image">
        {
          image && <img src={thumbnail ? thumbnail : image} alt={name} />
        }
      </div>
      <div className="information">
        <a href="#__" className="title">
          {name}
        </a>
        <div className="details">
          <div className="stock">
            {stock ? (
              <span className="withStock">with stock</span>
            ) : (
              <span className="withoutStock">without stock</span>
            )}
          </div>
        </div>
        <span className="desc">{description}</span>
      </div>
    </div>
  )
}
