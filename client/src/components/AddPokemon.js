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
      <Grid.Row>
        <Card key={id}>
          <Image src={sprites.front_default} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
          </Card.Content>
        </Card>
      </Grid.Row>
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
        <Grid columns={3} divided>
          {this.listPokemon()}
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { list: state.list };
};

export default connect(mapStateToProps)(AddPokemon);
