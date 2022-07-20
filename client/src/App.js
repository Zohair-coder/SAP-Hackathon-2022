import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@ui5/webcomponents-react';
import LoginView from './features/login';

function App() {
  return (
    <div>
      <ThemeProvider>
        <h1>The Missing Piece</h1>
        <LoginView></LoginView>
      </ThemeProvider>
    </div>
  );
}

export default App;
