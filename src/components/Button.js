import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Button.css'

const Button = (props) => {
  const size = props.wide ? 'wider' : 'normal'
  return (
    <button onClick={() => props.clickHandler(props.name)} style={{ backgroundColor: props.color }} className={size}>{props.name}</button>
  )
}

Button.propTypes = {
  name: PropTypes.string
}

Button.defaultProps = {
  color: 'orange'
}

export default Button
