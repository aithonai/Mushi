import "./App.css"
import "./assets/Font.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import New from "./pages/New"
import Nav from './components/Nav'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/new" element={<New />} />
        <Route path="/" index element={<Home />} />
      </Routes>
    </>
  )
}
