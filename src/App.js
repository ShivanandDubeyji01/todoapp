import React, { Component } from 'react'
import Main from './containers/Main'
import { Provider } from 'react-redux'
import {store,persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
export default class 
 extends Component {
  render() {
    return (
      
        <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
      
    )
  }
}
