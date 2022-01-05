import "../scss/Loader.scss"
import loader_logo from "../assets/loader.svg"

function Loader() {
  return (
    <div className="loader">
      <img className="animation" src={loader_logo} alt="Loader" />
    </div>
  )
}

export default Loader
