import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import pokedex from './pokedex';
import pokemons from './pokemons';

const rootReducer = combineReducers({
  user,
  flash,
  pokedex,
  pokemons,
});

export default rootReducer;
