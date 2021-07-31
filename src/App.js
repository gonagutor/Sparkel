import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { i: 0, liked: false };
  }

  sumarNumero = () => {
    if (this.state.liked) this.setState({ i: this.state.i - 1, liked: false });
    else this.setState({ i: this.state.i + 1, liked: true });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hola Gonzalo <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.sumarNumero}>{this.state.i}</button>
        </header>
      </div>
    );
  }
}

export default App;
