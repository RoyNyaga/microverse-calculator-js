import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import './App.css'

class App extends React.Component {
  render () {
    return (
      <div className='app-wrapper'>
        <div className='jumbotron'>
          <h1 className='display-3'>Hello, world!</h1>
          <p className='lead'>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className='m-y-md' />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className='lead'>
            <a className='btn btn-primary btn-lg' href='/' role='button'>Learn more</a>
          </p>
        </div>
      </div>
    )
  }
}
export default App
