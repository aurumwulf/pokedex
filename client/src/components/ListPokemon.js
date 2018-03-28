import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showPokemon } from '../actions/pokemon';
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Image,
} from 'semantic-ui-react';

class ListPokemon extends React.Component {
  capitalize(name) {
    return (
      name.charAt(0).toUpperCase() + name.slice(1)
    );
  }

  indexPokemon(number) {
    return ('00' + (number + 1)).slice(-3);
  }

  listPokemon() {
    const {
      list: { results = [{ name: '', url: '' }] },
    } = this.props;

    return results.map((pokemon, index) => (
      <Card key={index + 1}>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src={
              '/assets/images/' + (index + 1) + '.png'
            }
          />
          <Card.Header>
            {this.capitalize(pokemon.name)}
          </Card.Header>
          <Card.Meta>
            #{this.indexPokemon(index)}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Link to={'/pokedex/' + (index + 1)}>
            <Button
              compact
              circular
              onClick={() =>
                this.props.dispatch(
                  showPokemon(pokemon.url),
                )
              }>
              View Properties
            </Button>
          </Link>
        </Card.Content>
      </Card>
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
        <Divider hidden />
        <Grid>
          <Card.Group itemsPerRow={3}>
            {this.listPokemon()}
          </Card.Group>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { list: state.pokedex };
};

export default connect(mapStateToProps)(ListPokemon);
