<template lang="jade">
  v-toolbar.secondary(light)
    v-toolbar-title 🚀 Electron + OAuth + Vue + Github 🚀
    avatar(v-if="isAuthenticated")
    v-btn(icon flat v-if="isAuthenticated" @click.native="logout")
      v-icon close
</template>

<script>
  import Avatar from './Avatar.vue';

  export default {
    name: 'header',
    computed: {
      isAuthenticated() {
        return this.$store.getters.isAuthenticated;
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout').then(() => this.$router.push({name: 'login'}));
      }
    },
    components: {
      avatar: Avatar
    }
  }
</script>