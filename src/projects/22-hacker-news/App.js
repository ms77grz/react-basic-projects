import './App.css';
import SearchForm from './SearchForm';
import Stories from './Stories';
import Buttons from './Buttons';
import { AppProvider } from './context';

function App() {
  return (
    <AppProvider>
      <SearchForm />
      <Buttons />
      <Stories />
    </AppProvider>
  );
}

export default App;
