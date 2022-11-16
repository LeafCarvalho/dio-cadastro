import React from 'react'
import { Input } from '../Input'
import { Button } from '../Button'

import { ContentContainer } from './style'

export const Content = () => {
  return (
    <ContentContainer>
        <div className='Phrase'>
            <h1>A plataforma para você aprender com experts, dominar as principais tecnologias mais rápido e entrar mais rápido nas empresas mais desejadas.</h1>
        </div>

        <div className="userInteractive">
            <h1>Comece agora grátis</h1>
            <p>Crie sua conta e make the change._</p>
            <Input placeholder="🦲 Nome Completo" />
            <Input placeholder="📧 E-mail"/>
            <Input placeholder="🔒 Password"/>
            <Button />
            <p>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
            <h4>já tenho conta. <span>Fazer login</span></h4>
        </div>
    </ContentContainer>
  )
}