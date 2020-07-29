import React from 'react';
import data from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

export default function Home() {
  return (
    <PageDefault>
         <BannerMain
        videoTitle={data.categorias[0].videos[0].titulo}
        url={data.categorias[0].videos[0].url}
        videoDescription={''}
      />
      {data.categorias.map((categoria) => (
        <Carousel key={categoria.cor} category={categoria} />
      ))}
      </PageDefault>
  );
}
