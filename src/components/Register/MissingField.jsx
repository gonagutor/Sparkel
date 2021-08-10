import React from 'react';
import PropTypes from 'prop-types';

export default function MissingField({ text, clazz }) {
  return (
    <div
      className={clazz}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: '26px',
        color: 'red',
        flexGrow: 1,
      }}
    >
      <i style={{
        fontFamily: 'COCO-Icons', fontSize: '24px', paddingRight: '8px', fontStyle: 'normal',
      }}
      >
        
      </i>
      <p style={{
        fontFamily: '"Gilroy-Regular", sans-serif',
        fontSize: '16px',
        lineHeight: '24px',
        margin: '0px',
      }}
      >
        {text}
      </p>
    </div>
  );
}

MissingField.propTypes = {
  text: PropTypes.string.isRequired,
  clazz: PropTypes.string,
};

MissingField.defaultProps = {
  clazz: '',
};
