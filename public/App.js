import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import ReactRouter from './components/router-container/route-container';


const history = createBrowserHistory();
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <ReactRouter history={history} />
        </Router>

      </div>
    )
  }
}