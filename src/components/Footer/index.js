import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      
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
