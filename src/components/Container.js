import React from 'react';

import MessagesList from './MessagesList';
import MessageInput from './MessageInput';

const Container = props => {
  return (
    <div className="container">
      <MessagesList />
      <MessageInput />
    </div>
  );
};

export default Container;
