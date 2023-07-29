import React, { Component } from 'react'
import Beer from './beer'


export default class beers extends Component {
    constructor() {
        super()
        this.state = {
          items: []
        }
      }

      componentDidMount() {
        fetch("https://api.punkapi.com/v2/beers")
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            console.log(data)
            this.setState({
              items: data
            })
          })
      }

  render() {
    return (
        <ul className="items">
        {
          this.state.items.map((item) => {
            return (
              <Beer id={item.id}name={item.name}
                    image={item.image_url}
              />
            )
          })
        }
      </ul>
    )
  }
}
