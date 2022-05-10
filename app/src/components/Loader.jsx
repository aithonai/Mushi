import { NewLoader, Animation } from "./LoaderStyles"
import loader_logo from "../assets/loader.svg"

function Loader(props) {
  return (
    <NewLoader centered={props.centered}>
      <Animation src={loader_logo} alt="Loader" />
    </NewLoader>
  )
}

export default Loader
