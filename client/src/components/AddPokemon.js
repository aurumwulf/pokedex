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
  Image,
} from 'semantic-ui-react';

class AddPokemon extends React.Component {
  listPokemon() {
    const {
      list: { name, id, sprites = {} },
    } = this.props;
    return (
      <Card key={id}>
        <Card.Content>
          <Image
            floated="right"
            size="tiny"
            src={sprites.front_default}
          />
          <Card.Header>{name}</Card.Header>
          <Card.Meta />
          <Card.Description />
        </Card.Content>
      </Card>
    );
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
        <Grid columns={9} divided>
          <Grid.Row>
            <Card.Group>
              {this.listPokemon()}
            </Card.Group>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { list: state.list };
};

export default connect(mapStateToProps)(AddPokemon);
