import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.scss'
import FoodList from './components/FoodList'
import Home from './components/Home/Home'

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <Home />
        <FoodList />
      </main>
    )
  }
}

export default App;
