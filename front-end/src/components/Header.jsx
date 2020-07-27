import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const onclickHandler = (setSideShow) => {
  setSideShow((curr) => !curr);
};

const logout = () => {
  console.log('logout');
};

const sidebar = () => {
  return (
    <div className="lateral" ref={sidebar}>
      <nav className="sidebar">
        <ul>
          <li><Link to="/products" data-testid="side-menu-item-products">Produtos</Link></li>
          <li><Link to="/orders" data-testid="side-menu-item-my-orders">Meus pedidos</Link></li>
          <li><Link to="/profile" data-testid="side-menu-item-my-profile">Meus perfil</Link></li>
          <li><Link to="/login" onClick={() => logout()} data-testid="side-menu-item-logout">Sair</Link></li>
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