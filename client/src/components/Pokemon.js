import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  Grid,
  Divider,
  Button,
} from 'semantic-ui-react';

class Pokemon extends React.Component {
  displayPokemon = () => {
    return (
      <Grid.Column width={4}>
        {/* {this.props.pokemons.map(p => (
          <Card key={p.id}>
            <Card.Content>
              <Card.Header>{p.name}</Card.Header>
            </Card.Content>
          </Card>
        ))} */}
      </Grid.Column>
    );
  };

  render() {
    return (
      <Container>
        <br />
        <Header as="h1" textAlign="center">
          My Pokémon Collection
        </Header>
        <Divider hidden />
        <Grid centered>
          <Link to="/pokedex/list">
            <Button compact circular>
              Add Seen Pokémon
            </Button>
          </Link>
        </Grid>
        <Divider hidden />
        <Divider />
        <Grid>
          <Grid.Row>{this.displayPokemon()}</Grid.Row>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { pokemon: state.pokemons };
};

export default connect(mapStateToProps)(Pokemon);
