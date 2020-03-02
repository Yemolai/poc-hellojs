/*
export function someGetter (state) {
}
*/

export function profile(state) {
  return Object.keys(state)
    .filter((network) => !!state[network] && typeof state[network] === 'object')
    .reduce((acc, network) => ({
      ...acc,
      ...state[network].profile,
    }), {});
}

export function expiration(state) {
  return Object.keys(state)
    .filter((network) => !!state[network] && typeof state[network] === 'object')
    .reduce((acc, network) => ({
      ...acc,
      ...{ [network]: state[network].expires },
    }), {});
}
