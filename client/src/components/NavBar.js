import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name });

  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position="right">
          <Menu.Item
            name="Logout"
            onClick={() =>
              dispatch(handleLogout(history))
            }
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position="right">
        <Link to="/register">
          <Menu.Item name="Register" />
        </Link>
        <Link to="/login">
          <Menu.Item name="Login" />
        </Link>
      </Menu.Menu>
    );
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}>
              Home
            </Menu.Item>
          </Link>
          <Link to="/pokedex">
            <Menu.Item
              name="pokedex"
              active={activeItem === 'pokedex'}
              onClick={this.handleItemClick}>
              Pokédex
            </Menu.Item>
          </Link>
          {this.rightNavs()}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(
  connect(mapStateToProps)(NavBar),
);
