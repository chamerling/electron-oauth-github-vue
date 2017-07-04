<template lang="jade">
  v-avatar
    img(:src="avatarUrl")
</template>

<script>
  export default {
    name: 'avatar',
    computed: {
      avatarUrl() {
        return this.$store.getters.avatarUrl;
      }
    }
  }
</script>