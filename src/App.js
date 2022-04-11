import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Settings from './pages/set/Settings';
import Game from './pages/game/Game';
import FeedbackPage from './pages/feedback/FeedbackPage';
import Ranking from './components/Ranking';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/settings" component={ Settings } />
      <Route path="/game" component={ Game } />
      <Route path="/ranking" component={ Ranking } />
      <Route path="/feedback" component={ FeedbackPage } />
    </Switch>
  );
}
