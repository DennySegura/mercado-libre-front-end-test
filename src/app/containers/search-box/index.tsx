/// <reference path="../../index.d.ts"/>
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppBar from '../../components/app-bar';
import Layer from '../layer';

class Home extends React.Component <SearchBoxContainerProps> {
  constructor(props: SearchBoxContainerProps){
    super(props);
  }
  public render() {
    const { onChange, onPress } = this.props;
    return (
      <div>
        <Helmet>
          <title>{'Test Front-End Mercado Libre'}</title>
        </Helmet>
        <AppBar value={null} onChange={onChange} onPress={onPress}/>
      </div>
    );
  }
}
export default Layer(Home);
