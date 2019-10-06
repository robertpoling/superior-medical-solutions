<template>
  <v-menu open-on-hover>
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on">More</v-btn>
    </template>
    <v-list flat>
      <v-list-item-group>
        <v-list-item v-for="item in navMore" :key="item.text">
          <v-list-item-content>
            <v-list-item-title>
              <v-btn text class="nav__link" :to="item.route">{{ item.text }}</v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "global-navigation-more",
  data() {
    return {
      navMore: [
        { text: "How We Compare", route: "/how-we-compare/" },
        { text: "Contact Us", route: "/contact-us/" }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>