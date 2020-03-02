import hello from 'hellojs';

export const socialLogin = async ({ commit }, { network }) => {
  const { authResponse } = await hello(network)
    .login({ scope: 'friends' });
  const profile = await hello(network).api('/me');
  commit('SET_AUTH_DATA', { [network]: { ...authResponse, profile } });
};
