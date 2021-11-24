import "./Card.css"

export default function Card({ thumbnail, image, name, description, stock }) {
  console.log(thumbnail)
  return (
    <div className="card">
      <div className="image">
        {
          image ? <img src={thumbnail} alt={name} /> : null
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
