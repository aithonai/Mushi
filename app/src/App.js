import "./App.css"
import { Route, Switch } from "wouter"
import New from "./pages/New"
import Home from "./pages/Home"

export default function App() {
  return (
    <Switch>
      <Route path="/new" component={New} />
      <Route path="/" component={Home} />
      <Route>
        <img src="https://i.stack.imgur.com/6M513.png" alt="xd"/>
      </Route>
    </Switch>
  )
}
