import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Button.css'

const Button = (props) => {
  return (
    <button className={props.classNaming}>{props.name}</button>
  )
}

Button.propTypes = {
  result: PropTypes.string
}

export default Button
