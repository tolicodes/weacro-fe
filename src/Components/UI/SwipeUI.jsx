import React from 'react';
import ReactSwipe from 'react-swipe';

const SwipeUI = ({
  reactSwipe, updater, children, skip,
}) => {
  if (skip) {
    return children;
  }
  return (
    <ReactSwipe
      ref={reactSwipe}
      swipeOptions={{
		  continuous: true,
		  transitionEnd: (index, elem) => updater(index),
      }}
    >
      {children}
    </ReactSwipe>
  );
};

export default SwipeUI;
