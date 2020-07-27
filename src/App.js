import React from 'react';
import Menu from './components/Menu';
import data from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Menu />

      <BannerMain
        videoTitle={data.categorias[0].videos[0].titulo}
        url={data.categorias[0].videos[0].url}
      />
      <Carousel category={data.categorias[4]} />
      <Carousel ignoreFirstVideo category={data.categorias[0]} />
      <Carousel category={data.categorias[1]} />
      <Carousel category={data.categorias[2]} />

      <Footer />
    </div>
  );
}
