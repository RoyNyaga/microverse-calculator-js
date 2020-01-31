import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import '../styles/App.css'

import Display from './Display'

class App extends React.Component {
  render () {
    return (
      <div className='app-wrapper'>
        <h1> App is working </h1>
        <Display />
        {/* <ButtonPanel /> */}
      </div>
    )
  }
}
export default App
