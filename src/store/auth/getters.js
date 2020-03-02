/*
export function someGetter (state) {
}
*/

export function profile(state) {
  return Object.keys(state)
    .reduce((acc, network) => ({
      ...acc,
      ...state[network].profile,
    }), {});
}

export function expiration(state) {
  return Object.keys(state)
    .reduce((acc, network) => ({
      ...acc,
      [network]: state[network].expires,
    }));
}
