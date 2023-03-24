import React from 'react';
import { MyButton, ButtonLabel, DynamicButton } from './ButtonStyle.style';
import './Button.css';

function Button() {
  return (
    <div>
      <MyButton backgroundColor='coral' color='white' border='coral' className='btn'>Click 1</MyButton>
      <MyButton backgroundColor='goldenrod' color='black' border='goldenrod' className='btn'>
        <ButtonLabel>Click 2</ButtonLabel>
      </MyButton>

      <DynamicButton buttonLabel='Dynamic Button' backgroundColor='violet' color='black' border='violet' className='btn'></DynamicButton>
    </div>
  )
}

export default Button