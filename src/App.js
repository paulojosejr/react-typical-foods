import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.scss'
import FoodList from './components/FoodList'

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <FoodList />
      </main>
    )
  }
}

export default App;
