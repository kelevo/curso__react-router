import React, { useState } from'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import Header from '../components/Header';

import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = props => {

    const [form, setValues] = useState({
        email: '',
    });

    const handleInput = event => {
        // setValues viene se useState
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    // Funcion para enviar elementos capturados
    const handleSubmit = event => {
        // Matar el funcionamiento general de HTML con formularios
        // para evitar conflictos con las url
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
    }

    return (
        <React.Fragment>
            <Header isLogin />
            <section className="login">
                <section className="login__container">
                    <h2>Inicia sesión</h2>
                    <form className="login__container--form" onSubmit={handleSubmit}>
                        <input
                            name="email"
                            className="input"
                            type="text"
                            placeholder="Correo"
                            onChange={handleInput}
                        />
                        <input
                            name="password"
                            className="input"
                            type="password"
                            placeholder="Contraseña"
                            onChange={handleInput}
                        />
                        <button className="button">Iniciar sesión</button>
                        <div className="login__container--remember-me">
                            <label>
                                <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
                            </label>
                            <a href="/">Olvidé mi contraseña</a>
                        </div>
                    </form>
                    <section className="login__container--social-media">
                        <div><img src={googleIcon} /> Inicia sesión con Google</div>
                        <div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
                    </section>
                    <p className="login__container--register">
                        No tienes ninguna cuenta {' '}
                        <Link to="/register">
                            Registrate
                        </Link>
                    </p>
                </section>
            </section>
        </React.Fragment>
    );
}

const mapDispatchToProps = {
    loginRequest,
}

// export default Login;
export default connect(null, mapDispatchToProps)(Login);