import React from 'react';
import { Main } from './styles';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

export default function PageDefault({ children }) {
  return (
    <>
    <Menu />
        <Main>
          {children}
        </Main>
    <Footer />
    </>
  );
}