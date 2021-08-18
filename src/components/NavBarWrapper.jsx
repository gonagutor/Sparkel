import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import '../styles/NavBar.css';

// eslint-disable-next-line no-unused-vars
function NavBarWrapper({ children, history }) {
  const getStateNumber = () => {
    if (window.innerWidth > 700) {
      return (3);
    } if (window.innerWidth > 400) {
      return (2);
    }
    return (1);
  };
  const [windowState, setWindowState] = React.useState(getStateNumber());

  React.useEffect(() => window.addEventListener('resize', () => setWindowState(getStateNumber())));

  return (
    <div style={{ marginTop: (windowState === 3) && '78px' }}>
      {(windowState === 3) && <BigDeviceNavBar />}
      {(windowState === 2) && <MediumDeviceNavBar />}
      {(windowState === 1) && <SmallDeviceNavBar />}
      {children}
    </div>
  );
}

function BigDeviceNavBar() {
  return (
    <div style={{
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      zIndex: 9999,
      background: 'var(--main-bg-color)',
      display: 'flex',
      padding: '16px',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
    >
      <h1 id="appTitle">Sparkel</h1>
      <div>
        <input type="button" className="navBarInteractionButton" value="" />
        <input type="button" className="navBarInteractionButton margined" value="" />
        <input type="button" className="navBarInteractionButton margined" value="" />
        <input type="button" className="navBarInteractionButton margined" value="" />
        <input type="button" className="navBarInteractionButton margined" value="" />
        <input type="button" className="navBarInteractionButton margined" value=" " style={{ background: 'url(https://picsum.photos/seed/5b940de4-7bec-4d9e-9e57-cb52c328dba7/42/42)' }} />
      </div>
      <div style={{ position: 'fixed', bottom: '32px', right: '32px' }}>
        <input type="button" className="navBarInteractionButton" value="" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
      </div>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function MediumDeviceNavBar() {
  return (
    <div style={{ display: 'flex', padding: '16px' }}>
      <p id="appTitle" style={{ fontSize: '24px' }}>Sparkel</p>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function SmallDeviceNavBar() {
  return (
    <div style={{
      position: 'fixed',
      left: 12,
      right: 12,
      bottom: 12,
      zIndex: 9999,
      background: 'var(--main-bg-color)',
      display: 'flex',
      padding: '16px',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: '16px',
      border: '2px solid',
      borderColor: 'var(--main-color)',
    }}
    >
      <input type="button" className="navBarInteractionButton" value="" />
      <input type="button" className="navBarInteractionButton margined" value="" />
      <input type="button" className="navBarInteractionButton margined" style={{ backgroundColor: 'var(--accent-30)' }} value="" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
      <input type="button" className="navBarInteractionButton margined" value="" />
      <input
        type="button"
        className="navBarInteractionButton margined"
        value=""
        onClick={() => {
          // Que te pida una foto
          // Subirla y guardarla QUIZÁ

          // Nombres utiles: React, Node.js, Javascript, formatos: (.jpg, .png, .tiff)
        }}
      />
    </div>
  );
}

NavBarWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(NavBarWrapper);
