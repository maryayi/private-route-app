import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home'
import Admin from './components/Admin'
import User from './components/User'

const routes = [
  {
    path: '/user',
    component: User,
    role: 'user',
  },
  {
    path: '/admin',
    component: Admin,
    role: 'admin',
  }
]

function App() {
  const [role, setRole] = useState('user');
  return (
    <div className="App">
      <Router>
        <header className="App__header">
          <div className="App__role">
            <label htmlFor="role" className="App__role-label">Your role</label>
            <select id="role" value={role} onChange={e => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </ div>
          <ul className="App__nav">
            <li>
              <Link to="/">
                <a>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link to="/user">
                <a>
                  Only for users
                </a>
              </Link>
            </li>
            <li>
              <Link to="/admin">
                <a>
                  Only for admin
                </a>
              </Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route
            path="/"
            exact
          >
            <Home />
          </Route>
          {routes.map(route => {
            return (
              <PrivateRoute
                key={route.path}
                path={route.path}
                component={route.component}
                isAllowed={route.role === role}
                exact
              />
            )
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
