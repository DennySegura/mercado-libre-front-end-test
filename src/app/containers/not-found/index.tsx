import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import AppBar from '../../components/app-bar';
import Layer from '../layer';

class NotFound extends React.Component {
  constructor(props:any){
    super(props);
  }
  render() {
    const { onChange, onPress }: any = this.props;
    return (
      <div>
        <Helmet>
          <title>{'Test Not Found'}</title>
        </Helmet>
        <AppBar value={null} onChange={onChange} onPress={onPress}/>
        <div className={'column not-found__content'}>
          <img className={'not-found__image mb3'} src={require('../../assets/img/404-imagen.jpg')} alt={'404_error'}/>
          <h3 className={'mb3'}>{'Parece que esta página no existe'}</h3>
          <Link to="/">{'Ir a la página principal'}</Link>
        </div>
      </div>
    );
  }
}
export default Layer(NotFound);
