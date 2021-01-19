import React from 'react';
import Home from './pages/home';
import Header from './components/header';
import Cart from './pages/cart';
import { Route } from 'react-router-dom';
import './scss/app.scss';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App;
