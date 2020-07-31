import React from 'react';
import { Link } from 'react-router-dom';
import ImgLogo from '../../assets/img/logo.png';
import ButtonLink from '../ButtonLink';

import { Nav, Logo } from './styles';

export default function Menu() {
  return (
    <Nav>
      <Logo>
        <Link to="/">
          <img src={ImgLogo} alt="EnglishFlix Logo" />
        </Link>
      </Logo>

      <ButtonLink as={Link} to="/cadastro/video">
        Novo Video
      </ButtonLink>
    </Nav>
  );
}
