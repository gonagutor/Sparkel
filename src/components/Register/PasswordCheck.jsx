import React from 'react';

export default function PasswordCheck() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingLeft: '26px',
      paddingBottom: '8px',
      color: 'red',
    }}
    >
      <i style={{ fontFamily: 'COCO-Icons', fontSize: '24px', paddingRight: '8px' }}></i>
      <p style={{
        fontFamily: '"Gilroy-Regular", sans-serif',
        fontSize: '16px',
        lineHeight: '24px',
        margin: '0px',
      }}
      >
        This field is required
      </p>
    </div>
  );
}
