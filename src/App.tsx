import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import Home from './pages/Home';
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppHeader />
      <main>
        <Home />
      </main>
      <AppFooter />
    </div>
  );
};

export default App;
