import React from 'react';
import {
  LeftArrow, RightArrow, ArrowButton, Control,
} from './style';

export default function Navigation({ next, prev }) {
  return (
    <Control>
      <ArrowButton onClick={prev}>
        <LeftArrow />
      </ArrowButton>
      <ArrowButton onClick={next}>
        <RightArrow />
      </ArrowButton>
    </Control>
  );
}
