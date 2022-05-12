import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

const AlternativeSlider = ({ people }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(slider);
  });

  const nextSlide = () => {
    setIndex(prev => {
      let index = prev + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prevSlide = () => {
    setIndex(prev => {
      let index = prev - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };

  return (
    <>
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        let position = 'nextSlide';
        if (personIndex === index) {
          position = 'activeSlide';
        }
        if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
          position = 'lastSlide';
        }
        return (
          <article key={id} className={position}>
            <img src={image} alt={name} className='person-img' />
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}
      <button className='prev' onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </>
  );
};

export default AlternativeSlider;
