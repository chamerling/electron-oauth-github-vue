<template lang="jade">
  .login
    // @click.native instead of v-on:click -> https://github.com/vuematerial/vue-material/issues/630 😞
    v-btn(v-if="!authorizing", @click.native="login") Login with GitHub
    .authorizing(v-else)
      h2 Please hold on...
      v-progress-circular.primary--text(indeterminate)
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        authorizing: false
      };
    },
    methods: {
      login() {
        this.authorizing = true;
        this.$store.dispatch('getToken').then(res => {
          this.$store.getters.onAuthenticated.then(this.onSuccess);
        }, err => {
          console.log('Error while getting token', err);
        });
      },

      onSuccess() {
        this.authorizing = false;
        this.$router.push({name: 'home'});
      }
    }
  }
</script>

<style lang="less" scoped>
  .login {
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .authorizing {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    } 
  }
</style>
