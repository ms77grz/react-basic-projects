import React, { useState } from 'react';
import data from './data';
import './App.css';

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setText(data.slice(0, Number(count)));
  };

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form onSubmit={handleSubmit} className='lorem-form'>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          min={1}
          max={8}
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={e => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
