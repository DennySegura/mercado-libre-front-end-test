import * as React from 'react';

export default ({ text }:any) => {
  return (
    <button className={'button--container bg-dodger-blue'}>
      <span className={'subheading'}>{text}</span>
    </button>
  );
}
