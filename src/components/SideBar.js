import React from 'react';
import { connect } from 'react-redux';

const SideBar = props => {
  return (
    <div className="sidebar">
      <ul>{props.users.map((user, idx) => <li key={idx}>{user.userName}</li>)}</ul>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(SideBar);
