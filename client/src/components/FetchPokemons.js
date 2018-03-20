import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getPokemons } from '../actions/pokemons';
import Pokemons from './Pokemons';
import { Loader, Dimmer } from 'semantic-ui-react';

class FetchPokemons extends React.Component {
  state = { loaded: false };

  componentDidMount() {
    this.props.dispatch(getPokemons(this.setLoaded));
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <Route
          exact
          path="/pokedex"
          component={Pokemons}
        />
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

export default connect()(FetchPokemons);
