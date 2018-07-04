/// <reference path="../../index.d.ts"/>
import * as React from 'react';
import { Helmet } from 'react-helmet';
import * as queryString from 'query-string';
import AppBar from '../../components/app-bar';
import BreadCrumb from '../../components/breadcrumb';
import Description from '../../components/product-description';
import ProductInfo from '../../components/product-info';
import Button from '../../components/button';
import ErrorState from '../../components/error-response';

export default class ItemDetail extends React.Component <ItemDetailProps> {
  constructor(props: ItemDetailProps){
    super(props);
  }
  public componentDidMount(){
    const { match, data } = this.props;
    if (data && data.item) {
      this.props.clearWindow('detail');
    }
    this.props.searchProduct(match.params.id);
  }
  public render() {
    const { data, error, onChange, onPress } = this.props;
    return (
      <div>
        {data && data.item.title && <Helmet
          title={data.item.title}
          meta={[
            {name: 'description', content: data.item.description },
            {property: 'og:type', content: 'article'},
            {property: 'og:title', content: data.item.title},
            {property: 'og:image', content: data.item.picture}
          ]}
        />}
        <AppBar value={null} onChange={onChange} onPress={onPress}/>
        {error && !data && <ErrorState title={error.title} message={error.message}/>}
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
