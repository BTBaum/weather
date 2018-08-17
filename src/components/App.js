import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

const API_KEY = 'appid=b7c39bcd112707191d11bd37e5c84658'
const OPEN_WEATHER = 'http://api.openweathermap.org/data/2.5/weather?zip='

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zip: "",
      data: null
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({ zip: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault()
    // I would add check to make sure zip has length of 5
    // before submitting. If not tell user to enter 5 digit zip
    const zipSearch = `${OPEN_WEATHER}${this.state.zip}&${API_KEY}`
    axios.get(zipSearch)
      .then(({ data }) => {
        console.log("data", data)
        this.setState({ data })
      })
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
