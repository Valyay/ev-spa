import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { PrivateRoute } from './components/PrivateRoute';
import './App.css';

const App: React.FC = () => {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
        </Switch>
    );
};

export default App;
