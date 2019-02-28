import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux';
import Logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers'
import {BrowserRouter,Route,NavLink} from "react-router-dom";
import GamesPage from "./components/game/GamesPage";
import GameForm from "./components/GameForm"

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(Logger,thunk)
    )
    );

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <div className="ui container">
            <div className="ui three item menu">
                <NavLink exact activeClassName="active" className="item" to="/">home</NavLink>
                <NavLink exact activeClassName="active" className="item" to="/games">page</NavLink>
                <NavLink exact className="item" to="/games/new">new</NavLink>
            </div>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/games" component={GamesPage}></Route>
            <Route path="/games/new" component={GameForm}></Route>
        </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
