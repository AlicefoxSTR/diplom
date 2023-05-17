import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import App from './app/App';
import {store, persistor} from './app/store'
import { PersistGate } from 'redux-persist/integration/react';

import './assets/styles/normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter >
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
