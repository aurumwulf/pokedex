import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

class Pokemons extends React.Component {
  state = {};

  pokemons = () => {
    return (
      <Grid columns={3} divided>
        <Grid.Row>
          {/* Insert Columns Here... */}
        </Grid.Row>
      </Grid>
    );
  };
  render() {
    return;
  }
}

const mapStateToProps = state => {
  return { pokemons: state.pokemons };
};

export default Pokemons;
