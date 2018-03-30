import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { listPokemon } from '../actions/pokedex';
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Image,
} from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller';

const styles = {
  scroller: { height: '60vh', overflow: 'auto' },
};

class ListPokemon extends React.Component {
  state = {
    page: 1,
    total_pages: 48,
  };

  componentDidMount() {
    const initialUrl =
      'https://pokeapi.co/api/v2/pokemon/?limit=20';
    const { page } = this.state;
    this.props.dispatch(listPokemon(initialUrl, page));
  }

  loadMore = () => {
    const { page } = this.state;
    const { list: { next } } = this.props;
    debugger;
    const nextPage = page + 1;
    this.props.dispatch(listPokemon(next, nextPage));
    this.setState({ page: nextPage });
  };

  capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  indexPokemon(number) {
    return ('00' + (number + 1)).slice(-3);
  }

  listPokemon() {
    const {
      list: { results = [{ name: '' }] },
    } = this.props;

    return results.map((pokemon, index) => (
      <Card key={index + 1}>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src={'/assets/images/' + (index + 1) + '.png'}
          />
          <Card.Header>
            {this.capitalize(pokemon.name)}
          </Card.Header>
          <Card.Meta>#{this.indexPokemon(index)}</Card.Meta>
        </Card.Content>
      </Card>
    ));
  }

  render() {
    const { page, totalPages } = this.state;

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
        <InfiniteScroll
          pageStart={page}
          loadMore={() => this.loadMore()}
          hasMore={page < totalPages}
          useWindow={false}>
          <Grid>
            <Card.Group
              itemsPerRow={4}
              style={styles.scroller}>
              {this.listPokemon()}
            </Card.Group>
          </Grid>
        </InfiniteScroll>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { list: state.pokedex };
};

export default connect(mapStateToProps)(ListPokemon);
