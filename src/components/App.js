import React from 'react'

import '../styles/App.css'

import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculator from '../logic/calculator'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: "",
      next: null,
      operation: null
    }
  }



  handleClick = (buttonName) => {
    let { total, next, operation } = calculator.calculateOption(this.state, buttonName);
    this.setState({
      total: total,
      next: next,
      operation: operation
    })

  }

  render () {
    return (
      <div className='app'>
        <div className='calc-wrapper'>
          <Display result={this.state.total} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>

      </div>
    )
  }
}
export default App
