import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import store from './redux/store';
import Login from './pages/Login';
import Config from './pages/Congif';
import Game from './pages/Game';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Route exact path="/" component={ Login } />
        <Route path="/config" component={ Config } />
        <Route path="/game" component={ Game } />
        <Route path="/feedback" component={ Feedback } />
        <Route path="/ranking" component={ Ranking } />
      </BrowserRouter>
    </Provider>
  );
}
