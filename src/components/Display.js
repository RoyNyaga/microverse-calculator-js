import React from 'react'
import PropTypes from 'prop-types'

const Display = (props) => {
  return (
    <h1>{props.result}</h1>
  )
}

Display.defaultProps = {
  result: 'O'
}

Display.propTypes = {
  result: PropTypes.string
}

export default Display
