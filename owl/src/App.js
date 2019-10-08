import React from 'react';
import logo from './logo.svg';
import './App.css';
import Participants from './components/Participants';
import store from './store';
import Chat from './components/Chat';
import Stage from './components/Stage';

function App() {
  return (
    <div>
      <Participants part={store.participants} />
      <Chat participants={store.participants} events={store.chatEvents} />
      <Stage part={store.participants} />
    </div>
  );
}

export default App;
