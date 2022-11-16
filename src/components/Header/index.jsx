import React from 'react'
import logodio from '../../assets/logo-dio.png'

import { HeaderContainer } from './style'

export const Header = () => {
  return (
    <>
    <HeaderContainer>
              <div className='navbar'>
                <img src={logodio} alt="" />
                <div className='content'>
                  <a href='#'>Home</a>
                  <a href='#' className='itemMenu'>Entrar</a>
                  <a href='#' className='itemMenu'>Cadastrar</a>
                </div>
              </div>
    </HeaderContainer>
    </>
  )
}
