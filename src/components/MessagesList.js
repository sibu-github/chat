import React from 'react';
import { connect } from 'react-redux';

const MessagesList = props => (
  <div className="message-list">
    <ul>
      {props.messageList.map((message, idx) => (
        <li key={idx}>
          {message.userName} : {message.message}
        </li>
      ))}
    </ul>
  </div>
);

function mapStateToProps(state) {
  return {
    messageList: state.messageList
  };
}

export default connect(mapStateToProps)(MessagesList);
