// imports. ReactDOM es para intermediar enre la app y el DOM. estilos en index.ss
// el componente App que es el comp ppal donde van a vivir los demas comp
//TODO en React es un componente
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//le indica que tiene que renderizar el comp App en el elemento
// del DOM que tenga como id 'root
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

