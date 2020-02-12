import React from 'react'

import '../styles/ButtonPanel.css'

import Button from './Button'

const ButtonPanel = (props) => {
  return (
    <div id='button-panel'>
      <div id='inner-panel'>
        <div id='group-one' className='row bg-primary'>
          <Button name='AC' color='#ffffff' clickHandler={props.clickHandler} />
          <Button name='+/-' color='#ffffff' clickHandler={props.clickHandler} />
          <Button name='%' color='#ffffff' clickHandler={props.clickHandler} />
          <Button name='÷' clickHandler={props.clickHandler} />
        </div>
        <div id='group-two' className='row'>
          <Button name='7' color='#ffffff' clickHandler={props.clickHandler} />
          <Button name='8' color='#ffffff' clickHandler={props.clickHandler} />
          <Button name='9' color='#ffffff' clickHandler={props.clickHandler} />
          <Button name='X' clickHandler={props.clickHandler} />
        </div>
        <div id='group-three' className='row'>
          <Button name='4' color='#ffffff' clickHandler={props.clickHandler} />
          <Button name='5' color='#ffffff' clickHandler={props.clickHandler} />
          <Button name='6' color='#ffffff' clickHandler={props.clickHandler} />
          <Button name='-' clickHandler={props.clickHandler} />
        </div>
        <div id='group-four' className='row'>
          <Button name='1' color='#ffffff' clickHandler={props.clickHandler} />
          <Button name='2' color='#ffffff' clickHandler={props.clickHandler} />
          <Button name='3' color='#ffffff' clickHandler={props.clickHandler} />
          <Button name='+' clickHandler={props.clickHandler} />
        </div>
        <div id='group-five' className='row'>
          <Button name='0' color='#ffffff' wide clickHandler={props.clickHandler} />
          <Button name='.' color='#ffffff' clickHandler={props.clickHandler} />
          <Button name='=' clickHandler={props.clickHandler} />
        </div>
      </div>
    </div>

  )
}

export default ButtonPanel
