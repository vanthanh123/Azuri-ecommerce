import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./sass/index.scss";
import Layout from "./component/Layout";
import { Provider } from "react-redux";
import { store } from "./redux/store"


ReactDOM.render(
    <Provider store={store}>
    <Layout />
    </Provider>
,
  document.getElementById('root')
);
