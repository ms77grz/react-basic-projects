import { useState } from 'react';
import data from './data';
import './App.css';
import Slider from './Slider';
import AlternativeSlider from './AlternativeSlider';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {/* <Slider people={people} /> */}
        <AlternativeSlider people={people} />
      </div>
    </section>
  );
}

export default App;
