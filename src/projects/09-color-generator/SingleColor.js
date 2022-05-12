import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ color: { rgb, weight, hex }, index }) => {
  const [alert, setAlert] = useState(false);
  const backgroundColor = `rgb(${rgb.join(',')})`;
  const hexColor = `#${hex}`;

  const handleClipboard = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexColor);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor }}
      onClick={handleClipboard}
    >
      <p className='percent-value'>{weight}%</p>
      {/* first approach using utils function rgbToHex */}
      {/* <p className='color-value'>{rgbToHex(...rgb)}</p> */}
      {/* second one */}
      <p className='color-value'>{hexColor}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
