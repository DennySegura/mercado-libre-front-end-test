/// <reference path="../../index.d.ts"/>
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as queryString from 'query-string';
import AppBar from '../../components/app-bar';
import BreadCrumb from '../../components/breadcrumb';
import AvailabilityItem from '../../components/result-list-item';
import ErrorState from '../../components/error-response';

export default class SearchBox extends React.Component <SearchBoxProps, SearchBoxState>{
  constructor(props: SearchBoxProps){
    super(props);
    this.state = { searched: props.location.search };
  }
  public static getDerivedStateFromProps(props: SearchBoxProps, state: SearchBoxState){
    const { location, searchProducts, clearWindow } = props;
    if (location.search !== state.searched) {
      const searched: any = (queryString.parse(location.search)).search;
      searchProducts(searched);
      clearWindow('availability');
      return { searched: location.search };
    }
    return null;
  }
  public componentDidMount(){
    const { keyword, inputValue } = this.props;
    if (keyword !== inputValue) {
      this.props.clearWindow('availability');
      this.props.changeInput(inputValue);
      this.props.searchProducts(inputValue);
    }
  }
  public render() {
    const { data, error, onChange, onPress, inputValue } = this.props;
    return (
      <div>
        {inputValue && <Helmet
          title={`${inputValue} en Test Front-End Mercado Libre`}
          meta={[ {property: 'og:type', content: 'article'},
          {property: 'og:title', content: `${inputValue} en Test Front-End Mercado Libre`}]}
        />}
        <AppBar value={inputValue} onChange={onChange} onPress={onPress}/>
        {error && !data && <ErrorState title={error.title} message={error.message}/>}
        { data && <div className={'screen__content'}>
          <BreadCrumb categories={data.categories}/>
          <div className={'screen__content--info ph'}>
            { data.items.map((item: ProductAvailabilityProps) => {
              return (
                <Link to={`/items/${item.id}`} className={'item__link--container'}>
                <AvailabilityItem {...item}/>
              </Link>);
            })}
          </div>
        </div>}
      </div>
    );
  }
}
