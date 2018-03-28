import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getPokemon } from '../actions/pokemons';
import { listPokemon } from '../actions/pokedex';
import Pokemon from './Pokemon';
import ListPokemon from './ListPokemon';
import PokemonView from './PokemonView';
import { Loader, Dimmer } from 'semantic-ui-react';

class FetchPokemon extends React.Component {
  state = { loaded: false };

  componentDidMount() {
    this.props.dispatch(getPokemon(this.setLoaded));
    this.props.dispatch(listPokemon());
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route
            exact
            path="/pokedex"
            component={Pokemon}
          />
          <Route
            exact
            path="/pokedex/list"
            component={ListPokemon}
          />
          <Route
            exact
            path="/pokedex/:id"
            component={PokemonView}
          />
        </div>
      );
    } else {
      return (
        <Dimmer active>
          <Loader>Finding your Pokédex...</Loader>
        </Dimmer>
      );
    }
  }
}

export default connect()(FetchPokemon);
