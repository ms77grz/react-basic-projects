import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => (
        <button
          onClick={() => filterItems(category)}
          key={index}
          className='filter-btn'
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
