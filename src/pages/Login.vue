<template>
  <q-page class="docs-input row justify-center">
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xl dark">
      <div class="text-center" style="color:white">
        <img
          alt="Quasar logo"
          src="~assets/quasar-logo-full.svg"
        >
        <p class="q-display-1 text-weight-bolder q-pt-lg">Quasar + Hello.js</p>
        <p class="q-title text-weight-bold q-ma-none">Social Login</p>
      </div>
      <div class="q-mt-xl">
        <q-btn
          color="primary"
          glossy
          push
          class="full-width"
          icon="fab fa-facebook-f"
          label="Login with Facebook"
          size="md"
          @click="auth('facebook')"
        >
          <q-tooltip>
            Login with facebook
          </q-tooltip>
        </q-btn>
        <div
          class="fb-like"
          data-share="true"
          data-width="450"
          data-show-faces="true">
          Like
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    async auth(network) {
      try {
        await this.$store.dispatch('auth/socialLogin', { network });
        this.$router.push('/home');
        this.$q.notify(`Logged in with ${network}`);
      } catch (e) {
        this.$q.notify(`Failed to login: ${e.message}`);
        // eslint-disable-next-line no-console
        console.error('Failed to login on', network, e);
      }
    },
  },
};
</script>
