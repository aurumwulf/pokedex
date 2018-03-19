import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import pokemons from './pokemons';

const rootReducer = combineReducers({
  user,
  flash,
});

export default rootReducer;
