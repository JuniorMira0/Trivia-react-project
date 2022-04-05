import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login/Login';

export default function App() {
  return (
    <Switch>
      <Route exact patch="/" component={ Login } />
    </Switch>
  );
}
