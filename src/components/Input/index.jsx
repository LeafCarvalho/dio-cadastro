import React from 'react'

import { InputContainer } from './style'

export const Input = (props) => {
  return (
    <InputContainer>
    <input type="text" placeholder={props.placeholder}/>
    </InputContainer>
  )
}