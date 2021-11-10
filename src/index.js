import React from 'react';
import ReactDOM from 'react-dom';
import { GifExpertApp } from './GifExpertApp';

import './index.css';

ReactDOM.render(
    <GifExpertApp />,
  document.getElementById('root')
);

//https://es.reactjs.org/docs/faq-structure.html
//checar urls
//https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76

//se ocupa el directorio build para desplegarlo en un sitio web
//se utiliza el comando npm start build para que se cree

//los custom hook es una forma de extraer logica de un compenente que quiero utilizar
//y extraerla de tal manera que se a sencillo utilizarla nuevamente
