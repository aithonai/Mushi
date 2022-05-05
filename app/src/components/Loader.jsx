import { NewLoader, Animation } from "./LoaderStyles"
import loader_logo from "../assets/loader.svg"

function Loader() {
  return (
    <NewLoader>
      <Animation src={loader_logo} alt="Loader" />
    </NewLoader>
  )
}

export default Loader
