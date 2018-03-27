import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Header,
  List,
} from 'semantic-ui-react';

class ListPokemon extends React.Component {
  capitalize(name) {
    return (
      name.charAt(0).toUpperCase() + name.slice(1)
    );
  }
  listPokemon() {
    const {
      list: { results = [{ name: '' }] },
    } = this.props;

    return results.map((pokemon, index) => (
      <List.Item>
        {this.capitalize(pokemon.name)}
      </List.Item>
    ));
  }

  render() {
    return (
      <Container>
        <br />
        <Header as="h1" textAlign="center">
          National Pokédex
        </Header>
        <Divider hidden />
        <Grid centered>
          <Link to="/pokedex">
            <Button compact circular>
              Back to Collection
            </Button>
          </Link>
        </Grid>
        <Divider hidden />
        <Divider />
        <List>{this.listPokemon()}</List>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { list: state.list };
};

export default connect(mapStateToProps)(ListPokemon);
