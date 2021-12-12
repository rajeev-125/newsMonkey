
import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        hello, my first class based app
        <NavBar />
        <News />
      </div>
    )
  }
}
