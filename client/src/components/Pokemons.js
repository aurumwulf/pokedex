import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  Grid,
  Card,
  Divider,
} from 'semantic-ui-react';
import styled from 'styled-components';

class Pokemons extends React.Component {
  displayPokedex = () => {
    return (
      <Grid.Row>
        {/* {this.props.pokemons.map(p => (
          <Card key={p.id}>
            <Card.Content>
              <Card.Header>{p.name}</Card.Header>
            </Card.Content>
          </Card>
        ))} */}
      </Grid.Row>
    );
  };

  render() {
    return (
      <Container>
        <br />
        <Header as="h1" textAlign="center">
          Your Pokédex
        </Header>
        <Divider />
        <Grid columns={3} divided>
          {this.displayPokedex()}
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { pokemons: state.pokemons };
};

export default connect(mapStateToProps)(Pokemons);
