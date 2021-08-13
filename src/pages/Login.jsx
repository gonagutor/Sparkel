import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import axios from 'axios';

import '../styles/Login.css';
import Popup from 'reactjs-popup';
import Theme from '../utils/theme';
import BlobsLockIcon from '../res/Login/blobs-lock-icon.svg';
import TopDecoration from '../res/top-decoration.svg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rememberMe: false,
      showModal: false,
      modalData: '',
    };

    this.toggleValue = localStorage.getItem('darkThemeOn') === 'true';
    if (this.toggleValue) Theme.changeToTheme(Theme.black);

    this.changeCurrentTheme = (val) => {
      localStorage.setItem('darkThemeOn', val);
      if (val === true) return Theme.changeToTheme(Theme.black);
      return Theme.changeToTheme(Theme.white);
    };

    this.formFieldsHandlers = {
      password: (e) => {
        this.setState({
          password: e.target.value,
        });
      },
      username: (e) => {
        this.setState({
          username: e.target.value,
        });
      },
      rememberMe: (e) => {
        this.setState({
          rememberMe: e.target.checked,
        });
      },
    };

    this.onLogin = () => {
      /* const { username, password, rememberMe } = this.state;
      console.log(`User: ${username}; Password: ${password}; Remember me: ${rememberMe}`); */
      const { username, password } = this.state;
      const { history } = this.props;
      axios.post('https://sparkel-api.herokuapp.com/auth/login', {
        username,
        password,
      }).then((val) => {
        localStorage.setItem('token', val.data.token);
        history.push('/');
      }).catch((error) => {
        if (error.response.status === 401) {
          this.setState({ modalData: 'No has verificado tu correo. Por favor ve a tu correo y haz click en el enlace que recibiste.\nSi no has recibido ningún enlace compruba tu carpeta de spam y si sigues sin encontrarlo haz click aquí', showModal: true });
        } else {
          this.setState({ modalData: 'Tu usuario o contraseña no son correctos prueba otra vez', showModal: true });
        }
      });
    };
  }

  render() {
    const {
      username, password, rememberMe, showModal, modalData,
    } = this.state;
    const closeModal = () => this.setState({ showModal: false });
    const { history } = this.props;
    return (
      <div id="container">
        <img src={TopDecoration} id="topDecoration" height="130px" width="100vw" alt="" />
        <div id="topRow">
          <h1 id="appTitle"> Sparkel </h1>
          <label htmlFor="themeChanger" className="switch">
            <input type="checkbox" id="themeChanger" defaultChecked={this.toggleValue} onChange={(v) => this.changeCurrentTheme(v.target.checked)} />
            <span className="slider round" />
          </label>
        </div>
        <div>
          <div id="welcomeContainer">
            <img src={BlobsLockIcon} style={{ marginLeft: '26px' }} alt="Lock Icon" />
            <div id="welcomeTextContainer">
              <h3 id="welcomeTitle"> ¿De vuelta? ¡Bienvenido! </h3>
              <p id="welcomeText"> Logueate para continuar </p>
            </div>
          </div>
          <form>
            <input className="inputStyle" id="usernameField" value={username} onChange={this.formFieldsHandlers.username} placeholder="Nombre de usuario" />
            <input className="inputStyle" id="passwordField" value={password} onChange={this.formFieldsHandlers.password} type="password" placeholder="Contraseña" />
            <div id="actionContainer">
              <label htmlFor="rememberme" id="remembermeLabel">
                <input type="checkbox" id="rememberme" checked={rememberMe} onChange={this.formFieldsHandlers.rememberMe} />
                Recuérdame
              </label>
              <input type="button" id="loginButton" value="Login" onClick={this.onLogin} />
            </div>
          </form>
        </div>
        <div id="registerCard">
          <h3 id="registerTitle">¿No tienes una cuenta? ¡Registrate!</h3>
          <p id="registerInfo">
            Necesitarás un codigo de invitación para poder registrarte. Si
            no tienes uno pideselo a alguien.
          </p>
          <button id="registerButton" type="button" onClick={() => history.push('/register')}> Registrarse </button>
        </div>
        <Popup open={showModal} closeOnDocumentClick onClose={closeModal}>
          <div className="modal">
            {modalData}
          </div>
          <input type="button" className="close" onClick={closeModal} value="De acuerdo" />
        </Popup>
      </div>
    );
  }
}

Login.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Login);
