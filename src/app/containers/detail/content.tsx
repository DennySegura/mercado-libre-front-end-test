import * as React from 'react';
import { Helmet } from 'react-helmet';
import * as queryString from 'query-string';
import AppBar from '../../components/app-bar';
import BreadCrumb from '../../components/breadcrumb';
import Description from '../../components/product-description';
import ProductInfo from '../../components/product-info';
import Button from '../../components/button';

export default class SearchBox extends React.Component <any, any>{
  state: any;
  constructor(props:any){
    super(props);
  }
  componentDidMount(){
    const { match, data } = this.props
    if(data && data.item){
      this.props.clearWindow('detail');
    }
    this.props.searchProduct(match.params.id);
  }
  render() {
    const { data, onChange, onPress }:any = this.props;
    return (
      <div>
        {data && data.item.title && <Helmet>
          <meta charSet="utf-8" />
          <title>{data.item.title}</title>
          <meta name="description" content={data.item.description}/>
        </Helmet>}
        <AppBar value={null} onChange={onChange} onPress={onPress}/>
        {data && <div className={'screen__content'}>
          <BreadCrumb categories={data.categories}/>
          <div className={'screen__content--info ph3 pt3 row'}>
            <div className={'flex__item__9'}>
              <img src={data.item.picture} className={'detail__image'} alt={'detail_image'}/>
              <Description description={data.item.description}/>
            </div>
            <div className={'flex__item__3'}>
              <ProductInfo {...data.item}/>
              <Button text={'Comprar'}/>
            </div>
          </div>
        </div>}
      </div>
    );
  }
}
