<template>
  <v-footer dark padless>
    <v-card flat>
      <v-card-text class="py-2 white--text text-center">
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