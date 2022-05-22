import MushiLogo from "../assets/mushi.svg"
import { MyWelcome, LogoContainer, Logo } from "./WelcomeStyles"

function Welcome() {
  return (
    <MyWelcome>
      <LogoContainer>
        <Logo src={MushiLogo} alt="mushi logo" />
      </LogoContainer>
    </MyWelcome>
  )
}

export default Welcome
