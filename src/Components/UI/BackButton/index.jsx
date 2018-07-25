import React from 'react';
import { BackButton, ReplyIcon } from './style';

export default () => (
  <BackButton>
    <ReplyIcon
      name="reply"
      size="huge"
      onClick={() => window.history.back()}
    />
  </BackButton>
);

