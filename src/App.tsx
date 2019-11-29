import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import './App.css';

const App: React.FC = () => {
    return (
        <Switch>
            <Route component={LoginPage} />
        </Switch>
    );
};

export default App;
