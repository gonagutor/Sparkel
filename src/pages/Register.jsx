import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import '../styles/Login.css';
import Theme from '../utils/theme';
import TopDecoration from '../res/Login/top-decoration.svg';
import MissingField from '../components/Register/MissingField';
import PasswordCheck from '../components/Register/PasswordCheck';

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
      showTooltips: [false, false, false, false, false, false],
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
        const { showTooltips } = this.state;
        showTooltips[0] = (e.target.value === '');
        this.setState({
          showTooltips,
          name: e.target.value,
        });
      },
      surname: (e) => {
        const { showTooltips } = this.state;
        showTooltips[1] = (e.target.value === '');
        this.setState({
          showTooltips,
          surname: e.target.value,
        });
      },
      username: (e) => {
        const { showTooltips } = this.state;
        showTooltips[2] = (e.target.value === '');
        this.setState({
          showTooltips,
          username: e.target.value,
        });
      },
      email: (e) => {
        const { showTooltips } = this.state;
        showTooltips[3] = (e.target.value === '');
        this.setState({
          showTooltips,
          email: e.target.value,
        });
      },
      password: (e) => {
        const { showTooltips } = this.state;
        showTooltips[4] = (e.target.value === '');
        this.setState({
          showTooltips,
          password: e.target.value,
        });
      },
      passwordCheck: (e) => {
        const { showTooltips } = this.state;
        showTooltips[5] = (e.target.value === '');
        this.setState({
          showTooltips,
          passwordCheck: e.target.value,
        });
      },
      inviteCode: (e) => {
        const { showTooltips } = this.state;
        showTooltips[6] = (e.target.value === '');
        this.setState({
          showTooltips,
          inviteCode: e.target.value,
        });
      },
    };

    this.formFieldValidators = {
      name: () => {
        const { name } = this.state;
        return (name === '');
      },
      surname: () => {
        const { surname } = this.state;
        return (surname === '');
      },
      username: () => {
        const { username } = this.state;
        return (username === '');
      },
      email: () => {
        const { email } = this.state;
        for (let nLetra = 0; nLetra < email.length; nLetra += 1) {
          if (email[nLetra] === '@') {
            for (let i = nLetra; i < email.length; i += 1) {
              if (email[i] === '.') {
                return true;
              }
            }
          }
        }
        return false;
      },
      password: () => {
        const { password } = this.state;
        const passwordChecks = [false, false, false, false, false];
        const number = '0123456789';
        const symbol = '+*{}[]?¿!¡-.,$#@()/\\&%';

        passwordChecks[0] = (password.length >= 8);
        for (let i = 0; i < number.length; i += 1) {
          if (password.includes(number[i])) { passwordChecks[1] = true; }
        }
        for (let y = 0; y < password.length; y += 1) {
          for (let z = 0; z < symbol.length; z += 1) {
            if (password[y] === symbol[z]) {
              passwordChecks[2] = true;
            }
          }
        }
        passwordChecks[3] = (password.toLocaleLowerCase() !== password);
        passwordChecks[4] = (password.toLocaleUpperCase() !== password);
        return (passwordChecks);
      },
      passwordCheck: () => {
        const { password, passwordCheck } = this.state;
        return (password === passwordCheck && password !== '' && passwordCheck !== '');
      },
      inviteCode: () => {
        const { inviteCode } = this.state;
        return (inviteCode.length === 6);
      },
    };

    this.onRegister = () => {
      const { showTooltips } = this.state;

      showTooltips[0] = this.formFieldValidators.name();
      showTooltips[1] = this.formFieldValidators.surname();
      showTooltips[2] = this.formFieldValidators.username();
      showTooltips[3] = !this.formFieldValidators.email();
      showTooltips[4] = !this.formFieldValidators.password().every((val) => (val === true));
      showTooltips[5] = !this.formFieldValidators.passwordCheck();
      showTooltips[6] = !this.formFieldValidators.inviteCode();

      this.setState({ showTooltips });
      if (showTooltips.every((val) => (val === false))) {
        // TODO: Redirigir el usuario
        // eslint-disable-next-line no-alert
        alert('Todo correcto');
      }
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
      inviteCode,
      showTooltips,
    } = this.state;
    const { history } = this.props;
    let nameAndSurnameTooltip = '';
    if (showTooltips[0]) { nameAndSurnameTooltip = 'Tu nombre es necesario'; }
    if (showTooltips[1]) { nameAndSurnameTooltip = 'Tus apellidos son necesarios'; }
    if (showTooltips[0] && showTooltips[1]) { nameAndSurnameTooltip = 'Tu nombre y tus apellidos son necesarios'; }

    return (
      <div id="container">
        <img src={TopDecoration} id="topDecoration" height="130px" width="100vw" alt="" />
        <div id="topRow">
          <button id="backButton" type="button" onClick={() => history.push('/login')}>
            <i style={{ fontFamily: 'COCO-Icons', fontSize: '24px', fontStyle: 'normal' }}></i>
          </button>
          <label htmlFor="themeChanger" className="switch">
            <input type="checkbox" id="themeChanger" defaultChecked={this.toggleValue} onChange={(v) => this.changeCurrentTheme(v.target.checked)} />
            <span className="slider round" />
          </label>
        </div>
        <form>
          <h1 style={{ fontSize: '36px', margin: '12px 26px', fontFamily: '"Gilroy-Heavy", sans-serif' }}> Registrarse </h1>
          <div id="nameRow" style={{ display: 'flex' }}>
            <input className="inputStyle rowFirst" value={name} onChange={this.formFieldsHandlers.name} placeholder="Nombre" />
            <input className="inputStyle rowSecond" value={surname} onChange={this.formFieldsHandlers.surname} placeholder="Apellidos" />
          </div>
          {(showTooltips[0] || showTooltips[1]) && <MissingField text={nameAndSurnameTooltip} />}
          <input className="inputStyle" value={username} onChange={this.formFieldsHandlers.username} placeholder="Nombre de usuario" />
          {showTooltips[2] && <MissingField text="Tu nombre de usuario es necesario" />}
          <input className="inputStyle" value={email} onChange={this.formFieldsHandlers.email} placeholder="Email" />
          {(showTooltips[3]) && <MissingField text="Debes introducir un correo válido" />}
          <input className="inputStyle" value={password} onChange={this.formFieldsHandlers.password} type="password" placeholder="Contraseña" />
          <input className="inputStyle" value={passwordCheck} onChange={this.formFieldsHandlers.passwordCheck} type="password" placeholder="Repite tu contraseña" />
          <PasswordCheck checksArray={
              [...this.formFieldValidators.password(), this.formFieldValidators.passwordCheck()]
            }
          />
          <input className="inputStyle" value={inviteCode} onChange={this.formFieldsHandlers.inviteCode} placeholder="Codigo de invitación" />
          {showTooltips[6] && <MissingField text="Debes introducir un codigo válido" />}
          <p style={{ paddingLeft: '36px', margin: '0px', color: 'gray' }}> (*) Todos los campos son necesarios</p>
          <input type="button" id="loginButton" value="Registrarse" onClick={this.onRegister} style={{ margin: '26px' }} />
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Register);
