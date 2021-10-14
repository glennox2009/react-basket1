import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductList from "./ProductList";
import Basket from "./basket";
import {createStore} from "redux";
import allReducers from "./reducers";
import {Provider} from "react-redux";

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
    <Provider store={store}>
    <div className="main-container">
        <section className="content">
            <Basket/>
        </section>
        <section className="content">
            <ProductList/>
        </section>
    </div>
    </Provider>,
  document.getElementById('root')
);

