import React from 'react';
import { Link } from 'react-router-dom'
import ImgLogo from '../../assets/img/freitasflix.png'
import ButtonLink from '../ButtonLink';

import { Nav, Logo } from './styles';

export default function Menu() {
  return (
    <Nav>
      <Logo>
        <Link to="/">
        <img src={ImgLogo} alt="FreitasFlix Logo"/>
        </Link>
      </Logo>

    
        <ButtonLink as={Link} to="/cadastro/video">
          Novo Video
        </ButtonLink>
    </Nav>
  );
} 