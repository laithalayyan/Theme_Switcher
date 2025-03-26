import React from 'react';
import { ThemeProvider, ThemeToggle } from './context/ThemeContext';
import { ThemedComponent } from './components/ThemedComponent';
import { useTheme } from './context/ThemeContext';
import './styles/main.scss';

function AppContent() {
  const { theme } = useTheme();
  
  return (
    <div className={`theme-container ${theme}`}>
      <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center gap-4 py-5">
        <ThemeToggle />
        <div className="col-12 col-md-8 col-lg-6">
          <ThemedComponent />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;