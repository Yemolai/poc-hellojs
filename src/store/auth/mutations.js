/*
export function someMutation (state) {
}
*/

export function SET_AUTH_DATA(state, payload) {
  Object.keys(payload).forEach((network) => {
    state[network] = payload[network];
  });
}

export function SAVE_TOKENS(state) {
  const tokens = Object.keys(state)
    .filter((network) => !!state[network] && typeof state[network] === 'object')
    .reduce((acc, network) => ({
      ...acc,
      [network]: {
        access_token: state[network].access_token,
        expires: state[network].expires,
      },
    }), {});
  localStorage.setItem('auth', JSON.stringify(tokens));
}
