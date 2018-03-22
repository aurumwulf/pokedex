import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import list from './list';
import pokemons from './pokemons';

const rootReducer = combineReducers({
  user,
  flash,
  list,
  pokemons,
});

export default rootReducer;
