import * as React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as queryString from 'query-string';
import AppBar from '../../components/app-bar';
import BreadCrumb from '../../components/breadcrumb';
import AvailabilityItem from '../../components/result-list-item';

export default class SearchBox extends React.Component <any, any>{
  constructor(props:any){
    super(props);
    this.state = { searched: props.location.search };
  }
  static getDerivedStateFromProps(props:any, state:any){
    const { location, searchProducts, clearWindow } = props;
    if(location.search !== state.searched){
      const searched: any = (queryString.parse(location.search)).search;
      searchProducts(searched);
      clearWindow('availability');
      return { searched: location.search }
    }
    return null;
  }
  componentDidMount(){
    const { keyword, inputValue } = this.props;
    if(keyword !== inputValue){
      this.props.clearWindow('availability');
      this.props.changeInput(inputValue)
      this.props.searchProducts(inputValue);
    }
  }
  render() {
    const { data, onChange, onPress, inputValue }:any = this.props;
    return (
      <div>
        {inputValue && <Helmet>
          <meta charSet="utf-8" />
          <title>{`${inputValue} en Test Front-End Mercado Libre`}</title>
        </Helmet>}
        <AppBar value={inputValue} onChange={onChange} onPress={onPress}/>
        { data && <div className={'screen__content'}>
          <BreadCrumb categories={data.categories}/>
          <div className={'screen__content--info ph'}>
            {data.items.map((item: any)=> {
              return (
                <Link to={`/items/${item.id}`} className={'item__link--container'}>
                <AvailabilityItem {...item}/>
              </Link>)
            })}
          </div>
        </div>}
      </div>
    );
  }
}
