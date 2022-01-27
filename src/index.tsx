import React from 'react';
import ReactDOM from 'react-dom'
import './assets/index.css'
import App from "./components/App";
import { store } from "./store/store";
import {Provider} from "react-redux";

const rootApp = document.getElementById('root')


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootApp
)
