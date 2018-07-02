import * as React from "react";
import { Provider } from 'react-redux'
import { store } from './flux'
import AppRouter from './config/router'

export default class App extends React.Component {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    )
  }
}
