import React from 'react';
import ReactDOM from 'react-dom';
import { Settings } from 'luxon';
import { configure } from 'mobx';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from './styles/MuiTheme';

// Установка локализации по умолчанию Luxon
Settings.defaultLocale = 'ru';

// StrictMode для Mobx
configure({ enforceActions: 'observed' });

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <App />
            </Router>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// Помогает при верстке, после можно отключить, так как при интеграции с апи может помещать
if (module.hot) {
    module.hot.accept();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();