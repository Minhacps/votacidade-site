import React from 'react'

import { UpperFooter, LowerFooter } from './'
import { apoiadores, contatos } from '../../../data'

export const Footer = () => (
  <footer>
    <UpperFooter
      apoiadores={apoiadores}
      contatos={contatos}
    />
    <LowerFooter />
  </footer>
)