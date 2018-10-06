import React from 'react';
import { BackButton, ReplyIcon } from './style';

function BackButtonUI() {
  return (
    <BackButton>
      <ReplyIcon
        name="reply"
        size="huge"
        onClick={() => window.history.back()}
      />
    </BackButton>
  );
}

export default BackButtonUI;
