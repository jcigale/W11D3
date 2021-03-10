import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_ONE_POKEMON = "RECEIVE_ONE_POKEMON";


export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const receiveOnePokemon = (pokemon_info) => {
  return {
    type: RECEIVE_ONE_POKEMON,
    pokemon: pokemon_info.pokemon,
    moves: pokemon_info.moves,
    items: pokemon_info.items
  }
} 

export const requestOnePokemon = (id) => (dispatch) => (
  APIUtil.fetchOnePokemon(id).then(
    pokemon => dispatch(receiveOnePokemon(pokemon))
  )
)

