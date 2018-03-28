import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import pokedex from './pokedex';
import pokemon from './pokemon';
import pokemons from './pokemons';

const rootReducer = combineReducers({
  user,
  flash,
  pokedex,
  pokemon,
  pokemons,
});

export default rootReducer;
