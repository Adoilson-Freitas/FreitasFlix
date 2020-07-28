import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
  <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>

      <Route component={() => (<div>Página 404</div>)}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

