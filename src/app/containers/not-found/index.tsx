import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import AppBar from '../../components/app-bar';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{'Test Not Found'}</title>
        </Helmet>
        <AppBar/>
        <div className={'column not-found__content'}>
          <img className={'not-found__image mb3'} src={require('../../assets/img/404-imagen.jpg')} alt={'404_error'}/>
          <h3 className={'mb3'}>{'Parece que esta página no existe'}</h3>
          <Link to="/">{'Ir a la página principal'}</Link>
        </div>
      </div>
    );
  }
}
