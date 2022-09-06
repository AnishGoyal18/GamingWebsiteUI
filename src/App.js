import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Games from './components/Games';
import PaidGames from './components/PaidGames';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Games />
      <PaidGames />
      <Footer />
    </div>
  );
}

export default App;
