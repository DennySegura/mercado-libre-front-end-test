import * as React from 'react';
const {Fragment} = React
export default ({categories}: {categories: string[]})=> {
  return (
    <Fragment>
      <ul className={'breadcrumb--container pv'}>
        {categories.map((item: string)=> <li key={item}>{item}</li>)}
      </ul>
    </Fragment>
  );
}
