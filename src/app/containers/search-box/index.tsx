/// <reference path="../../index.d.ts"/>
import * as React from 'react';
import { Helmet } from 'react-helmet';
import AppBar from '../../components/app-bar';
import Layer from '../layer';

class Home extends React.Component<SearchBoxContainerProps, any> {
  constructor(props: SearchBoxContainerProps) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }
  public render() {
    const { onChange, onPress } = this.props;
    return (
      <div>
        <Helmet
          title={'Test Front-End Mercado Libre'}
          meta={[
            { property: 'og:type', content: 'article' },
            { property: 'og:title', content: 'Test Front-End Mercado Libre' }
          ]}
        />
        <AppBar value={null} onChange={onChange} onPress={onPress} />
      </div>
    );
  }
}
export default Layer(Home);
