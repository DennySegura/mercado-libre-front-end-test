/// <reference path="../../index.d.ts"/>
import * as React from 'react';

const { Fragment } = React;
export default ({ categories }: BreadCrumbProps) => {
  return (
    <Fragment>
      <ul className={'breadcrumb--container pv'}>
        { categories.map((item: string) => <li key={item}>{item}</li>) }
      </ul>
    </Fragment>
  );
};
