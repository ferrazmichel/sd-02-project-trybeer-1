import React, { useState } from 'react';

import './style.css';

const onclickHandler = (setSideShow) => {
  setSideShow((curr) => !curr);
};

const sidebar = () => {
  return (
    <div className="lateral" ref={sidebar}>
      <nav className="sidebar">
        <ul>
          <li><a href="#" data-testid="side-menu-item-products">Produtos</a></li>
          <li><a href="#" data-testid="side-menu-item-my-orders">Meus pedidos</a></li>
          <li><a href="#" data-testid="side-menu-item-my-profile">Meu perfil</a></li>
          <li><a href="#" data-testid="side-menu-item-logout">Sair</a></li>
        </ul>
      </nav>
    </div>
  );
};

const Header = (props) => {
  const { title } = props;
  const [sideShow, setSideShow] = useState(false);

  return (
    <React.Fragment>
      {sideShow && sidebar()}
      <div className="header_comp">
        <button
          type="button"
          className="menu"
          data-testid="top-hamburguer"
          onClick={() => onclickHandler(setSideShow)}
        >
          <span className="material-icons">
            menu
          </span>
        </button>
        <div className="title">
        <p data-testid="top-title">{title}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;