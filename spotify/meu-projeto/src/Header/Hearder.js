import React from "react";
import './Header.css';
import Arrowleft from '../assets/icons/small-left.png';
import Arrowright from '../assets/icons/small-right.png';
import Search from '../assets/icons/search.png';

const Header = () => {
    return(
        <nav className="header-navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={Arrowleft} alt="seta esquerda" />
                </button>
                <button className="arrow-right">
                    <img src={Arrowright} alt="seta direita" />
                </button>
            </div>
            <div className="header-search">
                <img src={Search} alt="ícone de pesquisa" />
                <input id="search-input" type="text" maxLength="800" placeholder="O que você quer ouvir?" />
            </div>    
            <div className="header-login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>    
        </nav>
    );
};

export default Header;
