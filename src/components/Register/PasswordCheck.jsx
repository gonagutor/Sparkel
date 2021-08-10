import PropTypes from 'prop-types';
import React from 'react';
import MissingField from './MissingField';

export default function PasswordCheck({ checksArray }) {
  let i = 0;
  for (let y = 0; y < checksArray.length; y += 1) {
    if (checksArray[y]) i += 1;
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyItems: 'left',
      margin: '8px 26px ',
      color: 'red',
      borderRadius: '16px',
      border: '2px solid',
      borderColor: 'var(--main-color)',
      boxShadow: 'var(--main-color) 6px 6px',
    }}
    >
      <div style={{
        height: '16px',
        width: '90%',
        margin: '16px',
        borderRadius: '16px',
        border: '2px solid',
        borderColor: 'var(--main-color)',
      }}
      >
        <div style={{
          transition: 'width 0.5s',
          width: `${(i / checksArray.length) * 100}%`,
          height: '16px',
          borderRadius: '16px',
          background: 'linear-gradient(90deg, var(--primary-70) 0%, var(--primary-50) 28%, var(--accent-60) 100%)',
        }}
        />
      </div>
      {(!checksArray[0]
      || !checksArray[1]
      || !checksArray[2]
      || !checksArray[3]
      || !checksArray[4]
      || !checksArray[5])
        ? (
          <p style={{
            marginLeft: '16px', marginRight: 0, marginTop: 0, marginBottom: 0, color: 'var(--main-color)',
          }}
          >
            Tu contraseña debe contener al menos:
          </p>
        )
        : (
          <p style={{
            marginLeft: '16px', marginRight: 0, marginTop: 0, marginBottom: 0, color: 'var(--accent-60)',
          }}
          >
            Tu contraseña es valida
          </p>
        )}
      <div style={{ marginBottom: '16px', marginTop: '8px' }}>
        {!checksArray[3] && <MissingField text="Una mayúscula" />}
        {!checksArray[4] && <MissingField text="Una minúscula" />}
        {!checksArray[2] && <MissingField text="Una simbolo" />}
        {!checksArray[1] && <MissingField text="Un número" />}
        {!checksArray[0] && <MissingField text="Ocho caracteres" />}
        {!checksArray[5] && <MissingField text="Las contraseñas deben coincidir" />}
      </div>
    </div>
  );
}

PasswordCheck.propTypes = {
  checksArray: PropTypes.arrayOf(PropTypes.bool).isRequired,
};
