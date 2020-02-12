import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Display.css'

const Display = (props) => {
  return (
    <div id='display'>
      <h1 id='display-input'>{props.result}</h1>
    </div>
  )
}

Display.defaultProps = {
  result: 'O'
}

Display.propTypes = {
  result: PropTypes.string
}

export default Display
