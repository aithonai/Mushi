import "./App.css"
import "./assets/Font.css"
import { Routes, Route } from "react-router-dom";
import New from "./pages/New"
import Home from "./pages/Home"

export default function App() {
  return (
    <Routes>
      <Route path="/new" element={<New />} />
      <Route path="/" index element={<Home />} />
      <Route path="*" element={<p>404 NOT FOUND</p>} />
    </Routes>
  )
}
