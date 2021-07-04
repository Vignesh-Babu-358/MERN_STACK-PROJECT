import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './home';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


const route = (
  <Router>
    <div>
    <Route exact path="/" component={Home} />
    <Route path="/info" component={App} />
    <Route path="/add_user" component={App} />
    <Route path="/edit_user" component={App} />
    <Route path="/delete_user" component={App} />
    </div>
  </Router>
)

ReactDOM.render(route,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
