import React from 'react'

import '../styles/ButtonPanel.css'

import Button from './Button'

const ButtonPanel = () => {
  return (
    <div id='button-panel'>
      <div id='inner-panel'>
        <div id='group-one' className='row bg-primary'>
          <Button name='AC' color='#ffffff' />
          <Button name='+/-' color='#ffffff' />
          <Button name=' %' color='#ffffff' />
          <Button name='÷' />
        </div>
        <div id='group-two' className='row'>
          <Button name='7' color='#ffffff' />
          <Button name='8' color='#ffffff' />
          <Button name='9' color='#ffffff' />
          <Button name='X' />
        </div>
        <div id='group-three' className='row'>
          <Button name='4' color='#ffffff' />
          <Button name='5' color='#ffffff' />
          <Button name='6' color='#ffffff' />
          <Button name='-' />
        </div>
        <div id='group-four' className='row'>
          <Button name='1' color='#ffffff' />
          <Button name='2' color='#ffffff' />
          <Button name='3' color='#ffffff' />
          <Button name='+' />
        </div>
        <div id='group-five' className='row'>
          <Button name='0' color='#ffffff' wide />
          <Button name='.' color='#ffffff' />
          <Button name='=' />
        </div>
      </div>
    </div>

  )
}

export default ButtonPanel
