import React from 'react';
// connect => provee todo el estado al componente
import { connect } from 'react-redux';
// Link => maneja los enlaces de router
import { Link } from 'react-router-dom';
// gravatar => nos da las imagenes
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import classNames from 'classnames';

import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = props => {

  const { user, isLogin, isRegister } = props;
  // object.keys() => regresa el numero de elementos de un objeto
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    // Manda el payloda que es un objeto vacio
    props.logoutRequest({});
  }

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt="Icono de usuario" />
          }
          <p>Perfil</p>
        </div>
        <ul>

          {hasUser ?
            <li>
              <Link to="/register">
                {user.name}
              </Link>
            </li>
            : null
          }

          {hasUser ?
            <li><a href="#logout" onClick={handleLogout}>Cerrar Sesion</a></li>
            :
            <li>
              <Link to="/login">
                Iniciar sesion
              </Link>
            </li>
          }

        </ul>
      </div>
    </header>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
