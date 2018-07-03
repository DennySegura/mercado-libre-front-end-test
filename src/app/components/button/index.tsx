/// <reference path="../../index.d.ts"/>
import * as React from 'react';

export default ({ text }: ButtonProps) => {
  return (
    <button className={'button--container bg-dodger-blue'}>
      <span className={'subheading'}>{text}</span>
    </button>
  );
};
