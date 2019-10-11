<template>
  <div class="container">
    <v-toolbar dense flat height="120" class="container">
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <img class="nav__image" src="@/assets/images/logo.jpg" background="white" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon large="true" class="nav-mobile mb-6" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute temporary width="75%">
      <v-list-item>
        <v-list-item-content>
          <img class="nav-drawer--image" src="@/assets/images/logo.jpg" background="white" />
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="item in navMain" :key="item.text" :to="item.route">
          <v-list-item-content class="nav-drawer--items">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat class="nav-desktop">
      <v-spacer></v-spacer>
      <v-toolbar-items v-for="item in navMain" :key="item.text">
        <v-btn text class="nav__link" :to="item.route">{{ item.text }}</v-btn>
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
      ],
      drawer: null
    };
  }
};
</script>

<style lang="scss">
.nav {
  &__image {
    max-height: 95px;
    /* max-width: 380px; */
    max-width: 99%;
    box-shadow: none;
    @media only screen and (max-width: 501px) {
      max-width: 99%;
      box-shadow: none;
    }
  }
}
.nav-drawer {
  &--image {
    box-shadow: none;
  }
  &--items {
    text-transform: uppercase;
  }
}
@media only screen and (max-width: 1264px) {
  .nav-desktop {
    // bigger than 900px
    display: none !important;
  }
}
@media only screen and (min-width: 1265px) {
  button.nav-mobile {
    // smaller than 900px
    display: none !important;
  }
}
.v-navigation-drawer__content .v-list-item__title {
  font-size: 2rem !important;
  line-height: 3.5rem !important;
}
</style>