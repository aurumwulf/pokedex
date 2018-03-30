import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Image,
} from 'semantic-ui-react';

class PokemonView extends React.Component {
  capitalize(name) {
    return (
      name.charAt(0).toUpperCase() + name.slice(1)
    );
  }

  indexPokemon(number) {
    return ('00' + (number + 1)).slice(-3);
  }

  viewPokemon() {
    const { pokemon } = this.props;
    return (
      <Card>
        <Card.Content>
          {/* <Image
          floated="right"
          size="mini"
          src={
            '/assets/images/' + pokemon.id + '.png'
          }
        /> */}
          <Card.Header>{pokemon.name}</Card.Header>
          <Card.Meta>{pokemon.id}</Card.Meta>
        </Card.Content>
        <Card.Content extra />
      </Card>
    );
  }

  render() {
    return (
      <Container>
        <Grid>{this.viewPokemon()}</Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { pokemon: state.pokemon };
};

export default connect(mapStateToProps)(PokemonView);
