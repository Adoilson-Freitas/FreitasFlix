import React from 'react';
import { FooterBase, Logo } from './styles';
import Img from '../../assets/img/freitasflix.png'
 
function Footer() {
  return (
    <FooterBase>
      <Logo>
      <img src={Img} alt="FreitasFlixLogo"/>
      </Logo>
      <p>
        Desenvolvido por
        {' '} 
        <a className="dev" href="https://adoilson-freitas.github.io/portifolio/">Adoilson Freitas </a>
        {' '}
         durante a
        {' '}
       
        <a href="https://www.alura.com.br/">
           Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
