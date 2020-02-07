import React from 'react'

import '../styles/App.css'

import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculator from '../logic/calculator'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <div className='calc-wrapper'>
          <Display />
          <ButtonPanel />
        </div>

      </div>
    )
  }
}
export default App
