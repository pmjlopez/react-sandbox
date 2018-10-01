import { CssBaseline } from "@material-ui/core";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Router, Switch } from 'react-router';
import './index.css';
import { default as store } from './redux'
import registerServiceWorker from './registerServiceWorker';
import { Login } from './scenes';
import theme from './themes/mu-theme'

const history = createHistory()

ReactDOM.render(
    <Provider store={store}>
        <CssBaseline/>
        <MuiThemeProvider theme={theme}>
            <Router history={history}>
                <Switch>
                    <Route exact={true} path='/' component={Login} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
