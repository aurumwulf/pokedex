import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import pokemons from './pokemons';

const rootReducer = combineReducers({
  user,
  flash,
  pokemons,
});

export default rootReducer;
