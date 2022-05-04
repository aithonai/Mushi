import setTitle from "../utils/setTitle"
import Welcome from "../components/Welcome"
import Section from "../components/Section"

export default function Home() {
  setTitle('default')

  return (
    <>
      <Welcome />
      <Section />      
    </>
  )
}