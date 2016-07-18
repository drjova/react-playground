import fetch from 'isomorphic-fetch';

import {
  COUNTRIES_API,
  DECREASE,
  INCREASE,
  RECEIVE_COUNTRIES,
  REQUEST_COUNTRIES
} from '../constants';


export function increase(n) {
  return {
    type: INCREASE,
    amount: n,
  };
}

export function decrease(n) {
  return {
    type: DECREASE,
    amount: n,
  };
}

// Request countries action
export function requestCountries() {
  return {
    type: REQUEST_COUNTRIES
  };
};

// Receive countries action
export function receiveCountries(json) {
  return {
    type: RECEIVE_COUNTRIES,
    items: json,
  };
}

// HELPER FNCTIONS
function shouldFetchCountries(state) {
  const countries = state.countries;

  if (countries.items === undefined) {
    return true;
  }
  return false;
}


function fetchCountries() {
  return dispatch => {
    // Spread the news for requesting countries
    dispatch(requestCountries());
    // Fetch the countries
    return fetch(COUNTRIES_API)
      .then(response => response.json())
      .then(json => dispatch(receiveCountries(json)));
  };
}

export function getCountriesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchCountries(getState())){
      return dispatch(fetchCountries());
    }
  };
}
