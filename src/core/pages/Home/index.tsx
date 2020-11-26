import React from 'react';
import './styles.scss';

const Home = () => (
    <div className="home-container" >
        <div className="home-content">
            <h1 className="home-text-title">Desafio do Capítulo 3, Bootcamp DevSuperior</h1>
            <p className="home-text-subtitle">Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br /><br />
                Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br /><br />
                Este design foi adaptado a partir de Ant Design System for Figma, 
                de Mateusz Wierzbicki: <span className="home-text-email">antforfigma@gmail.com</span> 
            </p>
            <button className="home-button">
                Começar
            </button>

        </div>
    </div>
);

export default Home;
