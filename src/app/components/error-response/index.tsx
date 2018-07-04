/// <reference path="../../index.d.ts"/>
import * as React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/animation/bad-request.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: (animationData as any),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default ({ title, message }: any) => {
  return (
    <div className={'error__component--container'}>
      <Lottie options={defaultOptions} height={400} width={400} />
      <span className={'headline mt2'}>{title}</span>
      <span className={'title mt'}>{message}</span>
    </div>
  );
};
