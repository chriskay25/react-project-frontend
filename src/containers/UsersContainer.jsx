import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import User from '../components/User';
import UserForm from '../components/UserForm';
import { fetchUsers } from '../actions/fetchUsers';

class UsersContainer extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
        <User />

        <Route exact path="/users/new" component={UserForm} />
      {/* <Route exact path="/users" component={User} /> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, {fetchUsers})(UsersContainer)