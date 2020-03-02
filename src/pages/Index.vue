<template>
  <q-page class="flex flex-center column">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    <h2 class="text-h5">
      Hello.js proof-of-concept
    </h2>
    <p>{{ name }}</p>
    <p>{{ email }}</p>
    <q-btn @click="fbSignOut">Logout</q-btn>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PageIndex',
  computed: {
    ...mapGetters('auth', ['profile', 'expiration']),
    name() {
      return this.profile.name;
    },
    email() {
      return this.profile.email;
    },
    expiration() {
      return this.expiration.facebook;
    },
  },
  methods: {
    async fbSignOut(network) {
      try {
        await this.$hello.logout(network, { force: false });
        this.$q.notify(`Logged out of ${network}`);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        this.$q.notify(`Failed to logout of ${network}`);
      }
    },
  },
};
</script>
