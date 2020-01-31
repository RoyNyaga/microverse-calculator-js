import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Display.css'

const Display = (props) => {
  return (
    <h1 id='display'>{props.result}</h1>
  )
}

Display.defaultProps = {
  result: 'O'
}

Display.propTypes = {
  result: PropTypes.string
}

export default Display
