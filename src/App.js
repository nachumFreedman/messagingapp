import React, { Component } from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import './App.css';
import HeaderList from './HeaderList'

import usersReducer from './reducers/users'
import messagesReducer from './reducers/messages'

const store = createStore( combineReducers({
  users: usersReducer, messages: messagesReducer
}) );

const ConnectedHeaderList = connect(
  HeaderList.mapStateToProps,
  HeaderList.mapDispatchToProps
)(HeaderList);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ConnectedHeaderList/>
        </div>
      </Provider>
    );
  }
}

export default App;
