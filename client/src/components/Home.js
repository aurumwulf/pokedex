import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Header as="h1" textAlign="center">
        Welcome to your Pokédex! Gotta catch 'em all!
      </Header>
    );
  }
}

export default Home;
