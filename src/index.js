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
//https://es.reactjs.org/docs/introducing-jsx.html

//los custom hook es una forma de extraer logica de un compenente que quiero utilizar
//y extraerla de tal manera que se a sencillo utilizarla nuevamente

//se ocupa el directorio build para desplegarlo en un sitio web
//se utiliza el comando npm start build para que se cree
//al abrir el html nos dara error porque no esta en un servidor como tal
//antes de subirlo al github cambiamos el nombre de la carpeta build a docs para github para poder desplegar el repo o aplicaciones http
//modificamos el index.html en lo enlaces,le ponemos . antes del / slash para que no nos de el error una vez ya creado el github page
