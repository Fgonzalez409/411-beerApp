import {Component} from 'react'
import Beers from "./components/beers"
import './App.css'


class App extends Component {
  render() {
    return (
      <>
        <h1>Beers app</h1>
        <Beers/>
      </>
    )
  }
}
export default App
