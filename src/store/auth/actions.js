import hello from 'hellojs';

export const loadProfile = async ({ commit, state }, { network }) => {
  const profile = await hello(network).api('/me');
  commit('SET_AUTH_DATA', { [network]: { ...state[network], profile } });
};

export const socialLogin = async ({ commit }, { network }) => {
  const { authResponse } = await hello(network)
    .login({ scope: 'friends' });
  commit('SET_AUTH_DATA', { [network]: { ...authResponse } });
  commit('SAVE_TOKENS');
};
