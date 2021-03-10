import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from './../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
  case RECEIVE_ALL_POKEMON:
    return Object.assign({}, action.pokemon, state);
  case RECEIVE_ONE_POKEMON: 
  debugger
    return Object.assign({}, {[action.pokemon.id]: action.pokemon}, state);
  default:
    return state;
  }
}
  
export default pokemonReducer;
