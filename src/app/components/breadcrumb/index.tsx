import * as React from 'react';

export default (categories: Array<string>)=> {
  return (
    <ul className={'breadcrumb--container pv'}>
      {categories.map((item: string)=> <li>{item}</li>)}
    </ul>
  );
}
