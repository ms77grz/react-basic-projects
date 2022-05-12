import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';
import './App.css';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [colors, setColors] = useState(new Values('#f15025').all(10));

  const handleSubmit = e => {
    e.preventDefault();
    try {
      setError(false);
      setColors(new Values(color).all(10));
    } catch (error) {
      console.error(error.message);
      setError(true);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={e => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
          />
          <button type='submit' className='btn'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {colors.map((color, index) => (
          <SingleColor key={index} color={color} index={index} />
        ))}
      </section>
    </>
  );
}

export default App;
