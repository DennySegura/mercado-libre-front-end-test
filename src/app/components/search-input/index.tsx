/// <reference path="../../index.d.ts"/>
import * as React from 'react';

export default ({value, change, press}: any) => {
  return (
    <form onSubmit={press} className={'search__input__container'}>
      <input className={'search__input__input'} type={'text'} placeholder={'Nunca dejes de buscar'}
        value={value} onChange={change}/>
        <button className={'search__input__button'}>
          <img src={require('../../assets/img/ic_search.png')} alt={'ic_search'}/>
        </button>
      </form>
    );
  };
