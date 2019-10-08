import React from 'react';
import logo from './logo.svg';
import './App.css';
import Participants from './components/Participants';
import store from './store';
import Chat from './components/Chat';

function App() {
  return (
    // <Participants part={store.participants} />
    <Chat participants={store.participants} events={store.chatEvents} />
  );
}

export default App;
