<template>
  <v-footer>
    <small>&copy; Copyright {{ year }}, Anton Grebnev</small>
  </v-footer>
</template>

<script>
export default {
  setup() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>

</style>