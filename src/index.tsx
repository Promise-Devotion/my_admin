import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import commonRou from './router/index'
ReactDOM.render(
  <HashRouter>
    <App />
    {
      commonRou.map((item: { path: any; compoment: any; }, index: any) => {
        console.log(item)
        return (
          <Switch>
            <Route path={item.path} component={item.compoment}></Route>
          </Switch>
        )
      })
    }
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
