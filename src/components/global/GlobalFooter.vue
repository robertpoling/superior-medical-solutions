<template>
  <v-footer dark class="container">
    <v-card flat>
      <v-card-text class="white--text text-center">
        <strong>Superior Medical Solutions</strong>
        - © {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "global-footer"
};
</script>

<style lang="scss">
footer {
  .v-card {
    width: 100%;
  }
}
</style>