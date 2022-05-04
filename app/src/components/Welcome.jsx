import "./Welcome.scss"
import logo from "../assets/mushi.svg"

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome_container">
        <div className="welcome_logo_container">
          <div className="welcome_logo">
            <img src={logo} alt="mushi logo"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
