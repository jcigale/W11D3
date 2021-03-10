import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { receiveOnePokemon, requestOnePokemon } from './actions/pokemon_actions';
import {fetchOnePokemon} from './util/api_util';


document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  window.receiveOnePokemon = receiveOnePokemon;
  window.requestOnePokemon = requestOnePokemon;
  window.fetchOnePokemon = fetchOnePokemon;
  ReactDOM.render(<Root store={store} />, rootEl)
})