import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Button.css'

const Button = (props) => {
  // var allowRegister = age > 18
  console.log(props.wide)
  const size = props.wide ? 'wider' : 'normal'
  return (
    <button style={{ backgroundColor: props.color }} className={size}>{props.name}</button>
  )
}

Button.propTypes = {
  name: PropTypes.string
}

Button.defaultProps = {
  color: 'orange'
}

export default Button
