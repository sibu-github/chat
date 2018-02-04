import React from 'react';
import { connect } from 'react-redux';

import { addMessage } from '../actions';
import socket from '../socket';
import { ADD_MESSAGE } from '../actions/actionTypes';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageInput: ''
    };
  }

  handleInputMessage = e => this.setState({ messageInput: e.target.value });
  onKeyUp = e => {
    if (e.keyCode === 13) {
      this.props.addMessage(this.state.messageInput, this.props.userName);
      socket.send(
        JSON.stringify({
          type: ADD_MESSAGE,
          message: this.state.messageInput,
          userName: this.props.userName
        })
      );
      this.setState({ messageInput: '' });
    }
  };

  render() {
    return (
      <div className="message-input">
        <input type="text" value={this.state.messageInput} onKeyUp={this.onKeyUp} onChange={this.handleInputMessage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.users.length > 0 ? state.users[0].userName : ''
});

const mapDispatchToProps = dispatch => {
  return {
    addMessage: (message, userName) => dispatch(addMessage(message, userName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
