/// <reference path="../../index.d.ts"/>
import * as React from 'react';

const newLine = new RegExp('____________________________', 'g');
export default ({ description }: ProductDescriptionProps ) => {
  return (
    <div className={'mt column'}>
      <span className={'description--title mb3'}>{'Descripción del producto'}</span>
      <p className={'description--text mb3 tc-dusty-gray'}
        dangerouslySetInnerHTML={{__html: description.replace(newLine, '<br/>')}}/>
      </div>
    );
  };
