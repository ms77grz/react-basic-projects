import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Movie from './SingleMovie';
import { AppProvider } from './context';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movies/:id' element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
