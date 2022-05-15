import { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const inputRef = useRef('');
  const searchCocktail = () => {
    const value = inputRef.current.value.trim();
    if (value) {
      setSearchTerm(value);
    } else {
      return;
    }
  };
  useEffect(() => {
    setSearchTerm('a');
    inputRef.current.focus();
  }, [setSearchTerm]);

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={e => e.preventDefault()}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            id='name'
            ref={inputRef}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
