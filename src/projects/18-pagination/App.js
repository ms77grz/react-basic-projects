import { useState, useEffect } from 'react';
import './App.css';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, data, page]);

  const prevPage = () => {
    setPage(state => {
      const prevPage = state - 1;
      if (prevPage < 0) {
        return data.length - 1;
      }
      return prevPage;
    });
  };

  const nextPage = () => {
    setPage(state => {
      const nextPage = state + 1;
      if (nextPage > data.length - 1) {
        return 0;
      }
      return nextPage;
    });
  };

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        {/* followers list */}
        <div className='container'>
          {followers &&
            followers.map(follower => (
              <Follower key={follower.id} {...follower} />
            ))}
        </div>
        {/* end of followers list */}
        {/* pagination */}
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              prev
            </button>
            {data.map((_, index) => (
              <button
                key={index}
                className={page === index ? 'page-btn active-btn' : 'page-btn'}
                onClick={() => setPage(index)}
              >
                {index + 1}
              </button>
            ))}
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
          </div>
        )}
        {/* end of pagination */}
      </section>
    </main>
  );
}

export default App;
