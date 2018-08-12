import React from 'react';
import ReactSwipe from 'react-swipe';

export default function SwipeUI({
  reactSwipe, updater, children, skip,
}) {
  if (skip) return children;
  return (
    <ReactSwipe
      ref={reactSwipe}
      swipeOptions={{
        continuous: true,
        transitionEnd: index => updater(index),
      }}
    >
      {children}
    </ReactSwipe>
  );
}
