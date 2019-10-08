<template>
  <v-app class="layout">
    <GlobalNav />
    <div class="container">
      <slot />
    </div>
    <GlobalContact />
    <GlobalFooter />
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import GlobalNav from "@/components/global/GlobalNav";
import GlobalContact from "@/components/global/GlobalContact";
import GlobalFooter from "@/components/global/GlobalFooter";

export default {
  name: "layout-default",
  components: {
    GlobalNav,
    GlobalContact,
    GlobalFooter
  }
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
.v-application.layout {
  background: #eee;
}
.container {
  background: white;
}
</style>
