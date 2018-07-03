import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppBar from '../../components/app-bar';
import Layer from '../layer';

class Home extends React.Component <any, any> {
  constructor(props:any){
    super(props);
  }
  render() {
    const { onChange, onPress }: any = this.props;
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{'Test Front-End Mercado Libre'}</title>
        </Helmet>
        <AppBar value={null} onChange={onChange} onPress={onPress}/>
      </div>
    );
  }
}
export default Layer(Home);
