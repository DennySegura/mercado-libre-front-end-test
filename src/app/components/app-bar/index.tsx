import * as React from 'react';
import SearchFilter from '../search-input';

export default ({value, onChange, onPress}:any)=> {
  return (
    <div className={'app_bar__container'}>
      <img src={require('../../assets/img/Logo_ML.png')} alt={'ML_logo'}/>
      <SearchFilter value={value} change={onChange} press={onPress}/>
    </div>
  );
}
