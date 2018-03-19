import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { AppRegistry } from 'react-native';
import reducers from './src/reducers';
import App from './App';

const AppComponent = () => {
    return (

        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <App />
        </Provider>

    );
}

AppRegistry.registerComponent('DummyTwitter', () => AppComponent);
