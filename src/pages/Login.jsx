import React from 'react';
import '../styles/Login.css';
import Theme from '../utils/theme';
import BlobsLockIcon from '../res/Login/blobs-lock-icon.svg';
import TopDecoration from '../res/Login/top-decoration.svg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rememberMe: false,
    };

    this.toggleValue = sessionStorage.getItem('darkThemeOn') === 'true';
    if (this.toggleValue) Theme.changeToTheme(Theme.black);

    this.changeCurrentTheme = (val) => {
      sessionStorage.setItem('darkThemeOn', val);
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
    };
  }

  render() {
    const { username, password, rememberMe } = this.state;
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
          <button id="registerButton" type="button">Registrarse</button>
        </div>
      </div>
    );
  }
}

export default Login;
