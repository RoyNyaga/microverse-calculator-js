import React from 'react'

import Button from './Button'

const ButtonPanel = () => {
  return (
    <div id='button-panel'>
      <div id='group-one' className='row'>
        <Button name='AC' classNaming='generalBtn' />
        <Button name='+/-' classNaming='generalBtn' />
        <Button name=' %' classNaming='generalBtn' />
        <Button name='÷' classNaming='generalBtn' />
      </div>
      <div id='group-two' className='row'>
        <Button name='7' classNaming='generalBtn' />
        <Button name='8' classNaming='generalBtn' />
        <Button name='9' classNaming='generalBtn' />
        <Button name='X' classNaming='generalBtn' />
      </div>
      <div id='group-three' className='row'>
        <Button name='4' classNaming='generalBtn' />
        <Button name='5' classNaming='generalBtn' />
        <Button name='6' classNaming='generalBtn' />
        <Button name='-' classNaming='generalBtn' />
      </div>
      <div id='group-four' className='row'>
        <Button name='1' classNaming='generalBtn' />
        <Button name='2' classNaming='generalBtn' />
        <Button name='3' classNaming='generalBtn' />
        <Button name='+' classNaming='generalBtn' />
      </div>
      <div id='group-five' className='row'>
        <Button name='0' classNaming='bigger-btn' />
        <Button name='.' classNaming='generalBtn' />
        <Button name='=' classNaming='generalBtn' />
      </div>

    </div>

  )
}

export default ButtonPanel
