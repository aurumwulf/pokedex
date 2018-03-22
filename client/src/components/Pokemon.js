import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  Grid,
  Card,
  Divider,
  Button,
} from 'semantic-ui-react';

class Pokemon extends React.Component {
  displayPokemon = () => {
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
          My Pokémon Collection
        </Header>
        <Divider hidden />
        <Grid centered>
          <Link to="/pokedex/add">
            <Button compact circular>
              Add Seen Pokémon
            </Button>
          </Link>
        </Grid>
        <Divider hidden />
        <Divider />
        <Grid columns={3} divided>
          {this.displayPokemon()}
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { pokemon: state.pokemons };
};

export default connect(mapStateToProps)(Pokemon);
