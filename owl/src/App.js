import React from 'react';
import logo from './logo.svg';
import './App.css';
import Participants from './components/Participants';
import store from './store';

function App() {
  return (
    <Participants part={store.participants}/>
  );
}

export default App;
