import React from 'react';
import { connect } from 'react-redux';

class PokemonView extends React.Component {
  render() {
    return <div>PokemonView</div>;
  }
}

const mapStateToProps = (state) => {
  return { pokemon: state.pokemon };
};

export default connect(mapStateToProps)(PokemonView);
