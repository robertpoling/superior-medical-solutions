<template>
  <div class="container">
    <v-toolbar dense flat height="120" class="container">
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <g-image class="nav__image" src="@/assets/images/logo.jpg" fit="inside" background="white" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-app-bar flat>
      <v-spacer></v-spacer>
      <v-toolbar-items v-for="item in navMain" :key="item.text">
        <v-btn text class="nav__link mx-1" :to="item.route">{{ item.text }}</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "global-navigation",
  data() {
    return {
      navMain: [
        { text: "Home", route: "/" },
        { text: "What We Treat", route: "/what-we-treat/" },
        { text: "We Can Help", route: "/we-can-help/" },
        { text: "How We Compare", route: "/how-we-compare/" },
        { text: "Contact Us", route: "/contact-us/" }
      ]
    };
  }
};
</script>

<style lang="scss">
.nav {
  &__image {
    max-height: 100px;
    max-width: 380px;
  }
}
</style>