import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteInit from './routes/RouteInit';
import { StateProvider } from './providers/StateProvider';
import Reducer, { initialState } from './services/StateReducer';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/app.scss';
import AppThemeProvider from './providers/AppThemeProvider';
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={Reducer}>
            <AppThemeProvider>
                <RouteInit />
            </AppThemeProvider>
        </StateProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
