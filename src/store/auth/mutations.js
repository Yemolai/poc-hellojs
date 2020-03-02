/*
export function someMutation (state) {
}
*/

export function SET_AUTH_DATA(state, payload) {
  Object.keys(payload).forEach((network) => {
    state[network] = payload[network];
  });
}
