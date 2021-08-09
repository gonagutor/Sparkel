import React from 'react';
import '../styles/Login.css';
import Theme from '../utils/theme';
import TopDecoration from '../res/Login/top-decoration.svg';
import MissingField from '../components/Register/MissingField';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      username: '',
      email: '',
      password: '',
      passwordCheck: '',
      inviteCode: '',
      badPasswordState: '',
    };

    this.toggleValue = sessionStorage.getItem('darkThemeOn') === 'true';
    if (this.toggleValue) Theme.changeToTheme(Theme.black);

    this.changeCurrentTheme = (val) => {
      sessionStorage.setItem('darkThemeOn', val);
      if (val === true) return Theme.changeToTheme(Theme.black);
      return Theme.changeToTheme(Theme.white);
    };

    this.formFieldsHandlers = {
      name: (e) => {
        this.setState({
          name: e.target.value,
        });
      },
      surname: (e) => {
        this.setState({
          surname: e.target.value,
        });
      },
      username: (e) => {
        this.setState({
          username: e.target.value,
        });
      },
      email: (e) => {
        this.setState({
          email: e.target.value,
        });
      },
      password: (e) => {
        this.setState({
          password: e.target.value,
        });
      },
      passwordCheck: (e) => {
        this.setState({
          passwordCheck: e.target.value,
        });
      },
      inviteCode: (e) => {
        console.log('hola');
        this.setState({
          inviteCode: e.target.value,
        });
      },
    };

    this.onRegister = () => {
      const {
        inviteCode, email, password, passwordCheck,
      } = this.state;
      let codigoInvitacionValido = false;
      let emailValido = false;
      let passwordValida = false;
      const passwordChecks = [false, false, false, false, false];
      let passwordCheckValida = false;
      if (inviteCode.length === 6) {
        codigoInvitacionValido = true;
      }
      for (let nLetra = 0; nLetra < email.length; nLetra += 1) {
        if (email[nLetra] === '@') {
          for (let i = nLetra; i < email.length; i += 1) {
            if (email[i] === '.') {
              emailValido = true;
              break;
            }
          }
        }
      }
      if (password.length >= 8) {
        passwordChecks[0] = true;
        const number = '0123456789';
        for (let i = 0; i < number.length; i += 1) {
          if (password.includes(number[i])) {
            passwordChecks[1] = true;
          }
        }
        const symbol = '+*{}[]?¿!¡-.,$#@()/\\&%';
        for (let y = 0; y < password.length; y += 1) {
          for (let z = 0; z < symbol.length; z += 1) {
            if (password[y] === symbol[z]) {
              passwordChecks[2] = true;
            }
          }
        }
        const minuscula = password.toLocaleLowerCase();
        if (minuscula !== password) {
          passwordChecks[3] = true;
        }
        const mayuscula = password.toLocaleUpperCase();
        if (mayuscula !== password) {
          passwordChecks[4] = true;
        }
        for (let i = 0; i <= passwordChecks.length; i += 1) {
          if (passwordChecks[i] === true) {
            passwordValida = true;
          }
        }
      }
      if (password === passwordCheck) {
        passwordCheckValida = true;
      }

      if (emailValido === true
        && codigoInvitacionValido === true
        && passwordValida === true
        && passwordCheckValida === true) {
        alert('Te has registrado correctamete');
      } else {
        alert('Hay algún problema');
      }
      console.log(emailValido, codigoInvitacionValido, passwordValida, passwordCheckValida);
    };
  }

  render() {
    const {
      name,
      surname,
      username,
      email,
      password,
      passwordCheck,
      badPasswordState,
      inviteCode,
    } = this.state;
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
        <form>
          <h1 style={{ color: 'var(--main-color)', fontSize: '36px', margin: '12px 26px' }}>Registrarse</h1>
          <div id="nameRow" style={{ display: 'flex' }}>
            <input className="inputStyle rowFirst" value={name} onChange={this.formFieldsHandlers.name} placeholder="Nombre" />
            <input className="inputStyle rowSecond" value={surname} onChange={this.formFieldsHandlers.surname} placeholder="Apellidos" />
          </div>
          <input className="inputStyle" value={username} onChange={this.formFieldsHandlers.username} placeholder="Nombre de usuario" />
          {(name.trim() === '') && <MissingField />}
          <input className="inputStyle" value={email} onChange={this.formFieldsHandlers.email} placeholder="Email" />
          <input className="inputStyle" value={password} onChange={this.formFieldsHandlers.password} type="password" placeholder="Contraseña" />
          <input className={`inputStyle${badPasswordState}`} value={passwordCheck} onChange={this.formFieldsHandlers.passwordCheck} type="password" placeholder="Repite tu contraseña" />
          <input className="inputStyle" value={inviteCode} onChange={this.formFieldsHandlers.inviteCode} placeholder="Codigo de invitación" />
          {(name.trim() === '') && <MissingField />}
          <input type="button" id="loginButton" value="Registrarse" onClick={this.onRegister} style={{ margin: '26px' }} />
        </form>
      </div>
    );
  }
}

export default Register;
