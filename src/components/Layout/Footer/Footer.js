import React from 'react'

import { UpperFooter, LowerFooter } from './'
import { makers, supporters, contatos } from '../../../data'

export const Footer = () => (
  <footer>
    <UpperFooter
      makers={makers}
      supporters={supporters}
      contatos={contatos}
    />
    <LowerFooter />
  </footer>
)
