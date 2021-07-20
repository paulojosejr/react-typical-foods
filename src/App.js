import React, { Component } from 'react'
import './App.scss'
import { HashRouter } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Routes from './Routes'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <main>
          <Navbar />
          <Routes />
          <Footer />
        </main>
      </HashRouter>
    )
  }
}

export default App;