import * as React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { store } from './flux';
import AppRouter from './config/router';
import i18n from './config/translations';

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <Provider store={store}>
        <I18nextProvider i18n={ i18n }>
          <AppRouter/>
        </I18nextProvider>
      </Provider>
    );
  }
}
