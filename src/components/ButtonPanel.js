import React from 'react'

import '../styles/ButtonPanel.css'

import Button from './Button'

const ButtonPanel = () => {
  return (
    <div id='button-panel' className='container'>
      <div id='group-one' className='row bg-primary'>
        <Button name='AC' color='##ffffff' wide={false} />
        <Button name='+/-' color='##ffffff' wide={false} />
        <Button name=' %' color='##ffffff' wide={false} />
        <Button name='÷' wide={false} />
      </div>
      <div id='group-two' className='row'>
        <Button name='7' color='##ffffff' wide={false} />
        <Button name='8' color='##ffffff' wide={false} />
        <Button name='9' color='##ffffff' wide={false} />
        <Button name='X' wide={false} />
      </div>
      <div id='group-three' className='row'>
        <Button name='4' color='##ffffff' wide={false} />
        <Button name='5' color='##ffffff' wide={false} />
        <Button name='6' color='##ffffff' wide={false} />
        <Button name='-' wide={false} />
      </div>
      <div id='group-four' className='row'>
        <Button name='1' color='##ffffff' wide={false} />
        <Button name='2' color='##ffffff' wide={false} />
        <Button name='3' color='##ffffff' wide={false} />
        <Button name='+' wide={false} />
      </div>
      <div id='group-five' className='row'>
        <Button name='0' color='##ffffff' wide />
        <Button name='.' color='##ffffff' wide={false} />
        <Button name='=' wide={false} />
      </div>

    </div>

  )
}

export default ButtonPanel
