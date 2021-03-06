import React from 'react';
import ReactDOM from 'react-dom/client';

// import your current project here
import App from './projects/23-quiz/App';
import { AppProvider } from './projects/23-quiz/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
