import * as React from 'react';

const newLine = new RegExp('____________________________','g');
export default (description: string)=> {
  return (
    <div className={'description--container pl3'}>
      <span className={'description--title mb3'}>{'Descripción del producto'}</span>
      <p className={'description--text mb3 tc-dusty-gray'} dangerouslySetInnerHTML={{__html:description.replace(newLine,'<br/>')}}/>
    </div>
  );
}
