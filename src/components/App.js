import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zip: "",
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({ zip: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault()
  }

  render() {
    const { zip } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome App</h1>
        </header>
        <p className="App-intro">
          Find out local weather by zip code.
        </p>
        {/* 
          Could make Search a seperate component that talks to 
          data store that handles application state
        */}
        <form onSubmit={this.onSubmit}>
          <input 
            placeholder="Enter Zip Code"
            value={zip}
            type="number"
            onChange={this.onInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default App
