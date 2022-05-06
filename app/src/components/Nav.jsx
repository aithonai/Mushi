import "./Nav.scss"
import { UilPlus, UilApps } from '@iconscout/react-unicons'
import logo from "../assets/mushi_mini.png"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="nav">
      <div className="nav_container">
        <div className="nav_brand">
          <Link to="/">
            <a href="#a" className="logo_container">
              <img src={logo} alt="mushi logo" title="Go to Home"></img>
            </a>
          </Link>
        </div>
        <div className="nav_search">
          <input type="text" name="search" id="search" placeholder="Buscar" />
        </div>
        <div className="nav_items">
          <div className="nav_new">
            <Link to="new">
              <a href="#a">
                <UilPlus />
              </a>
            </Link>  
          </div>
          <div className="nav_menu_mobile" id="menu_btn">
            <UilApps />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
