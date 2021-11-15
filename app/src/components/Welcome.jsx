import "./Welcome.css"
import logo from "../assets/mushi_white.svg"

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome_container">
        <div className="welcome_logo_container">
          <div className="welcome_logo">
            <img src={logo} alt="mushi logo"></img>
          </div>
        </div>
        <div className="welcome_title">
          <h2> ¡Artículos con 40% de descuento! </h2>
        </div>
        <div className="welcome_description">
          <div className="description">
            <p>
              Queremos que este año sea mejor para tí, por ello, hemos rebajado
              nuestros precios para que disfrutes de lo que más te gusta
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
