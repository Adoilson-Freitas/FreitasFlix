import React from 'react';
import ImgLogo from '../../assets/img/freitasflix.png'
import ButtonLink from '../ButtonLink';

import { Nav, Logo } from './styles';

export default function Menu() {
  return (
    <Nav>
      <Logo>
        <a href="/">
        <img src={ImgLogo} alt="FreitasFlix Logo"/>
        </a>
      </Logo>

    
        <ButtonLink as='a' href="/">
          Novo Video
        </ButtonLink>
    </Nav>
  );
} 