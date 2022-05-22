import { MyNav, Content, Home, Logo, Search, OptionLink } from "./NavStyles.jsx"
import { UilPlus } from "@iconscout/react-unicons"
import MushiLogo from "../assets/mushi_mini.png"

function Nav() {
  return (
    <MyNav>
      <Content>
        <Home to="/">
          <Logo src={MushiLogo} alt="mushi logo" title="Go to Home" />
        </Home>
        <Search type="text" placeholder="Buscar" />
        <OptionLink to="new">
          <UilPlus />
        </OptionLink>
      </Content>
    </MyNav>
  )
}

export default Nav
