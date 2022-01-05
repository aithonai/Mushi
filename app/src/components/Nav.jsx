import "../scss/Nav.scss"
import { Link } from "wouter"
import logo from "../assets/mushi.svg"

function Nav() {
  return (
    <div className="nav">
      <div className="nav_container">
        <div className="nav_brand">
          <Link to="/">
            <div className="logo_container">
              <img src={logo} alt="mushi logo"></img>
            </div>
          </Link>
        </div>
        <div className="nav_search">
          <input type="text" name="search" id="search" placeholder="Buscar" />
        </div>
        <div className="nav_items">
          <div className="nav_new">
            <Link to="/new">
              <span className="material-icons">add</span>
            </Link>
          </div>
          <button className="nav_menu_mobile" id="menu_btn">
            <span className="material-icons">menu</span>
            <span className="material-icons hidden">cancel</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nav
