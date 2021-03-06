import React from 'react';

import Menu from '../../components/Menu';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import BannerMain from '../../components/BannerMain';
import DadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <BannerMain
        videoTitle="O que faz uma desenvolvedora Front-end? "
        url={DadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é Front-end? Trabalhando na área"
      />
      <Carousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[0]}
      />
      <Carousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[1]}
      />
      <Carousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[2]}
      />
      <Carousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[3]}
      />
      <Carousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[4]}
      />
      <Footer />
    </div>
  );
}

export default Home;
