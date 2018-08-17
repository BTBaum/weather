import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

// API should be stored as process.env.REACT_API_KEY not hard coded
const API_KEY = 'appid=b7c39bcd112707191d11bd37e5c84658'
const OPEN_WEATHER = 'http://api.openweathermap.org/data/2.5/weather?zip='

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zip: "",
      data: null,
      error: null,
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({ zip: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault()
    const zipSearch = `${OPEN_WEATHER}${this.state.zip}&${API_KEY}`
    axios.get(zipSearch)
      .then(({ data }) => {
        this.setState({ error: null, data })
      })
      .catch(({ response }) => {
        this.setState({ error: response.data.message })
      })
      this.setState({ zip: "" })
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
          data store that handles application state (Redux)
        */}
        <form onSubmit={this.onSubmit}>
          <input 
            placeholder="Enter Zip Code"
            value={zip}
            type="number"
            max="99999"
            onChange={this.onInputChange}
          />
          <button type="submit">Search</button>
        </form>
        { 
          this.state.error ?
          <p className="error">{ this.state.error }</p> :
          null
        }
      </div>
    )
  }
}

export default App