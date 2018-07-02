import * as React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as queryString from 'query-string';
import AppBar from '../../components/app-bar';
import BreadCrumb from '../../components/breadcrumb';
import AvailabilityItem from '../../components/result-list-item';

export default class SearchBox extends React.Component {
  state: any;
  constructor(props:any){
    super(props);
    this.typing = this.typing.bind(this);
    this.search = this.search.bind(this);
    const params = queryString.parse(props.location.search);
    this.state = {
      inputValue: params.search || null,
      searched: params.search
    }
  }
  typing({ target }:any){
    this.setState({inputValue: target.value});
  }
  search(event:any){
    event.preventDefault();
    const { history }:any = this.props;
    history.push(null, `/items?search=${this.state.inputValue.trim()}`);
  }
  render() {
    const { categories=[], availabilities=[] }:any = this.props;
    const { inputValue, searched } = this.state
    return (
      <div>
        {searched && <Helmet>
          <meta charSet="utf-8" />
          <title>{`${searched} en Test Front-End Mercado Libre`}</title>
          <link rel="canonical" href={`http://localhost:3000/items?search=${searched}`} />
        </Helmet>}
        <AppBar value={inputValue} onChange={this.typing} onPress={this.search}/>
        <div className={'screen__content'}>
          <BreadCrumb categories={categories}/>
          <div className={'screen__content--info ph'}>
            {availabilities.map((item: any)=> {
              return (
                <Link to={`/items/${item.id}`} className={'item__link--container'}>
                <AvailabilityItem {...item}/>
              </Link>)
            })}
          </div>
        </div>
      </div>
    );
  }
}
