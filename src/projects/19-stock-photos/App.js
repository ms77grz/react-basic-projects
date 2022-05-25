import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import { FaSearch } from 'react-icons/fa';
import Photo from './Photo';
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [refetch, setRefetch] = useState(false);

  const mounted = useRef(false);

  const fetchImages = async () => {
    setIsLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(state => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...state, ...data.results];
        } else {
          return [...state, ...data];
        }
      });
      setRefetch(false);
      setIsLoading(false);
    } catch (error) {
      setRefetch(false);
      setIsLoading(false);
      console.log(error);
    }
  };

  // fetch images on initial render and on page change
  useEffect(() => {
    // WHEN THE STRICT MODE IS ENABLED
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    // WHEN THE STRICT MODE IS ENABLED
    fetchImages();
  }, [page]);

  // fetch images only on scroll
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!refetch) return;
    if (isLoading) return;
    setPage(state => state + 1);
    //
  }, [refetch]);

  const scrollEvent = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 10
    ) {
      setRefetch(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);
    return () => window.removeEventListener('scroll', scrollEvent);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) return;
    if (page === 1) {
      fetchImages();
      return;
    }
    setPage(1);
  };

  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input
            type='text'
            placeholder='search'
            className='form-input'
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className='submit-btn' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'>
          {photos.map((photo, index) => (
            <Photo key={index} {...photo} />
          ))}
        </div>
        {isLoading && <h2 className='loading'>Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
