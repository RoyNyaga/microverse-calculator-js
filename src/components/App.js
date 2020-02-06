import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import '../styles/App.css'

import Display from './Display'
import ButtonPanel from './ButtonPanel'

class App extends React.Component {
  render () {
    return (
      <div className='app-wrapper container-fluid' id='app-wrapper-div'>
        <Display />
        <ButtonPanel />
      </div>
    )
  }
}
export default App
